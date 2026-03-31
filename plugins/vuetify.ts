// plugins/vuetify.ts
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiHandshake, mdiClose, mdiChevronDown, mdiChevronUp, mdiAccountCircle, mdiMagnify, mdiChevronRight, mdiMapMarker, mdiStar, mdiStarOutline, mdiCheck, mdiPhone, mdiCalendarCheck, mdiCalendarRemove, mdiEyeOff, mdiLock, mdiEye, mdiEmail, mdiDelete, mdiMenu, mdiHeart, mdiHeartOutline, mdiLogin, mdiLogout,mdiAccountPlus, mdiBriefcaseOutline, mdiChartLine, mdiStarHalfFull, mdiTrendingUp } from '@mdi/js'

export default createVuetify({
    defaults: {
        VBtn: {
            color: 'var(--neo-medium-blue)',
            class: ['text-white', 'rounded-xl'],
        }
    },
    locale: {
        locale: 'fr',
        fallback: 'en',
    },
    date: {
        locale: {
            fr: 'fr-FR',
        }
    },
    icons: {
        defaultSet: 'mdi',
        aliases: {
            ...aliases,
            handshake: mdiHandshake,
            close: mdiClose,
            chevronUp: mdiChevronUp,
            chevronDown: mdiChevronDown,
            chevronRight: mdiChevronRight,
            account: mdiAccountCircle,
            magnify: mdiMagnify,
            location: mdiMapMarker,
            star: mdiStar,
            starOutline: mdiStarOutline,
            check: mdiCheck,
            phone: mdiPhone,
            calendarCheck: mdiCalendarCheck,
            calendarRemove: mdiCalendarRemove,
            eyeOff: mdiEyeOff,
            eye: mdiEye,
            lock: mdiLock,
            email: mdiEmail,
            delete: mdiDelete,
            menu: mdiMenu,
            heart: mdiHeart,
            heartOutline: mdiHeartOutline,
            login: mdiLogin,
            logout: mdiLogout,
            register: mdiAccountPlus,
            job: mdiBriefcaseOutline,
            seniority: mdiTrendingUp,
        },
        sets: { mdi }
    }
})