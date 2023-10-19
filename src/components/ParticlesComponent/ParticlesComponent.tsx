import type { FC } from 'react'
import { useCallback } from 'react'

import { Particles } from 'react-particles'

import type { Engine, ISourceOptions } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

import './Particles.css'

interface ParticlesComponentProps {
	options: ISourceOptions
}

export const ParticlesComponent: FC<ParticlesComponentProps> = ({ options }): JSX.Element => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine)
	}, [])

	return <Particles id="tsparticles" init={particlesInit} options={options} />
}
