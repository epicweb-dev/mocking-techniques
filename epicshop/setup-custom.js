import path from 'node:path'
import fsExtra from 'fs-extra'
import {
	getApps,
	isProblemApp,
	setPlayground,
} from '@epic-web/workshop-utils/apps.server'

const allApps = await getApps()
const uniqueApps = allApps.filter(
	(a, index) => allApps.findIndex(b => b.fullPath === a.fullPath) === index,
)
const problemApps = allApps.filter(isProblemApp)

if (!process.env.SKIP_PLAYGROUND) {
	const firstProblemApp = problemApps[0]
	if (firstProblemApp) {
		console.log('🛝  setting up the first problem app...')
		const playgroundPath = path.join(process.cwd(), 'playground')
		if (await fsExtra.exists(playgroundPath)) {
			console.log('🗑  deleting existing playground app')
			await fsExtra.remove(playgroundPath)
		}
		await setPlayground(firstProblemApp.fullPath).then(
			() => {
				console.log('✅ first problem app set up')
			},
			error => {
				console.error(error)
				throw new Error('❌  first problem app setup failed')
			},
		)
	}
}
