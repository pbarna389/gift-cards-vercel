import type { ISourceOptions } from 'tsparticles-engine'

export const HeroParticleOptions: ISourceOptions = {
	name: 'Giftcard SnowEffect',
	particles: {
		blink: true,
		color: {
			value: [
				'#25df12',
				'#FF4421',
				'#FAFF00',
				'#FF6663',
				'#50A2A7',
				'#F00699',
				'#A01A7D',
				'#FF8C42',
			],
		},
		move: {
			direction: 'bottom',
			enable: true,
			speed: 2,
		},
		number: {
			limit: -1,
			value: 200,
		},
		opacity: {
			animation: {
				enable: true,
				speed: 0.8,
				sync: false,
			},
			value: {
				min: 0.1,
				max: 0.8,
			},
		},
		shape: {
			type: 'circle',
		},
		size: {
			value: {
				min: 1,
				max: 4,
			},
		},
	},
}
