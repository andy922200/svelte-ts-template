import { UserConfig, ConfigEnv, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'

export default ({ mode }: ConfigEnv): UserConfig => {
    const env = loadEnv(mode, process.cwd())
    const currentEnvName = env.VITE_APP_ENV_NAME || 'default'
    const currentNodeEnv = process.env.VITE_USER_NODE_ENV
    const isProdEnv = currentNodeEnv === 'production'
  
    return {
        plugins: [
            svelte({
                preprocess: sveltePreprocess({
                    sourceMap: !isProdEnv,
                    postcss: {
                        plugins: [autoprefixer()]
                    }
                })
            })
        ]
    }
}