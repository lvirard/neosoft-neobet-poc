// plugins/vuetify.ts
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiHandshake, mdiClose, mdiChevronDown, mdiChevronUp, mdiAccountCircle, mdiMagnify, mdiChevronRight, mdiMapMarker, mdiStar, mdiStarOutline, mdiCheck, mdiPhone, mdiCalendarCheck, mdiCalendarRemove } from '@mdi/js'

export default createVuetify({
    defaults: {
        VBtn: {
            color: 'var(--neo-medium-blue)',
            class: ['text-white', 'rounded-xl'],
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
        },
        sets: { mdi }
    }
})