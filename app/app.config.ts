export default defineAppConfig({
  appName: 'Canvas a Nuxt portfolio template',
  appDescription: 'Canvas is a simple but beautiful portfolio template for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by HugoRCD',
  profilePicture: '/assets/tuna.jpg',
  footerName: 'Tuna Erhanoglu',
  email: 'tuna@tunaerhanoglu.com',
  twitterUsername: '@tunaerhanoglu',
  phone: '',
  openGraphImage: 'https://tunaerhanoglu.com/social-preview.jpg',
  socials: {
    github: 'https://github.com/tunanika',
    twitter: 'https://twitter.com/tunaerhanoglu',
    linkedin: 'https://www.linkedin.com/in/tuna-e',
    instagram: 'https://www.instagram.com/tuna_erhanoglu_',
    spotify: 'https://open.spotify.com/user/uw9zmc69pb2mn1a59352s2ubj?si=19ed66528d134294',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
