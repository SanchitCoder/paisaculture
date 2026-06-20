import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Environment, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function FloatingGeometry({ prefersReduced }: { prefersReduced: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  const { viewport } = useThree()

  useFrame((state) => {
    if (prefersReduced) return
    const t = state.clock.elapsedTime

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.18
      meshRef.current.rotation.x = Math.sin(t * 0.12) * 0.15
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.22
      innerRef.current.rotation.z = t * 0.1
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.08
      ringRef.current.rotation.z = t * 0.14
    }
  })

  const scale = Math.min(viewport.width, viewport.height) * 0.28

  return (
    <Float
      speed={prefersReduced ? 0 : 1.8}
      rotationIntensity={prefersReduced ? 0 : 0.4}
      floatIntensity={prefersReduced ? 0 : 0.6}
    >
      {/* Outer distorted sphere */}
      <Sphere args={[1, 64, 64]} ref={meshRef} scale={scale}>
        <MeshDistortMaterial
          color="#1B365D"
          attach="material"
          distort={prefersReduced ? 0 : 0.35}
          speed={prefersReduced ? 0 : 1.5}
          roughness={0.1}
          metalness={0.4}
          transparent
          opacity={0.75}
          envMapIntensity={1.2}
        />
      </Sphere>

      {/* Inner solid sphere */}
      <Sphere args={[0.62, 32, 32]} ref={innerRef} scale={scale}>
        <meshStandardMaterial
          color="#1E293B"
          roughness={0.15}
          metalness={0.7}
          transparent
          opacity={0.9}
        />
      </Sphere>

      {/* Accent ring */}
      <mesh ref={ringRef} scale={scale}>
        <torusGeometry args={[1.2, 0.04, 16, 80]} />
        <meshStandardMaterial
          color="#C1272D"
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Second ring at different angle */}
      <mesh scale={scale} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
        <torusGeometry args={[1.05, 0.025, 12, 60]} />
        <meshStandardMaterial
          color="#1B365D"
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  )
}

function ParticleField({ prefersReduced }: { prefersReduced: boolean }) {
  const points = useRef<THREE.Points>(null)
  const count = 120

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 5
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3
    }
    return pos
  }, [])

  useFrame((state) => {
    if (prefersReduced || !points.current) return
    points.current.rotation.y = state.clock.elapsedTime * 0.04
    points.current.rotation.x = state.clock.elapsedTime * 0.02
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#1B365D"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  )
}

function Scene({ prefersReduced }: { prefersReduced: boolean }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={1.8} color="#1B365D" />
      <pointLight position={[-3, -2, -1]} intensity={1.2} color="#C1272D" />
      <directionalLight position={[0, 5, 2]} intensity={0.8} color="#ffffff" />
      <Environment preset="city" />
      <FloatingGeometry prefersReduced={prefersReduced} />
      <ParticleField prefersReduced={prefersReduced} />
    </>
  )
}

function FallbackVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-56 h-56">
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-slow" />
        <div className="absolute inset-6 rounded-full bg-primary/30 animate-float" />
        <div className="absolute inset-12 rounded-full bg-dark-800 shadow-glow-primary" />
        <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-spin" style={{ animationDuration: '12s' }} />
      </div>
    </div>
  )
}

export default function Hero3D() {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <FallbackVisual />
  }

  return (
    <div className="w-full h-full" role="img" aria-label="3D animated brand visual">
      <Suspense fallback={<FallbackVisual />}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 4.5], fov: 50 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'low-power',
          }}
          style={{ background: 'transparent' }}
        >
          <Scene prefersReduced={prefersReduced} />
        </Canvas>
      </Suspense>
    </div>
  )
}
