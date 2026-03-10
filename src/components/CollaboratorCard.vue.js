import { computed } from "vue";
import { useRouter } from "vue-router";
import { useCollaboratorStore } from "@/stores/collaboratorsListStore";
const props = defineProps({
    collaborator: {
        type: Object,
        required: true,
    },
});
const router = useRouter();
const collaboratorStore = useCollaboratorStore();
const isStarred = computed(() => collaboratorStore.favoriteCollaborators.some(c => c.id === props.collaborator.id));
function toggleStar() {
    if (isStarred.value) {
        collaboratorStore.removeFromFavorites(props.collaborator);
    }
    else {
        collaboratorStore.addToFavorites(props.collaborator);
    }
}
function goToDetail() {
    router.push({
        path: "detail/" + props.collaborator.name,
    });
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components.vCard | typeof __VLS_components.VCard} */
vCard;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    rounded: "lg",
    ...{ class: "mb-4 pa-4" },
}));
const __VLS_2 = __VLS_1({
    rounded: "lg",
    ...{ class: "mb-4 pa-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
const { default: __VLS_6 } = __VLS_3.slots;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle | typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle} */
vCardTitle;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({}));
const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar} */
vAvatar;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    color: "var(--neo-dark-blue)",
    badge: ({ color: __VLS_ctx.collaborator.isAvailable ? 'green' : 'red' }),
}));
const __VLS_15 = __VLS_14({
    color: "var(--neo-dark-blue)",
    badge: ({ color: __VLS_ctx.collaborator.isAvailable ? 'green' : 'red' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
const { default: __VLS_18 } = __VLS_16.slots;
{
    const { badge: __VLS_19 } = __VLS_16.slots;
    let __VLS_20;
    /** @ts-ignore @type {typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon} */
    vIcon;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        icon: (__VLS_ctx.collaborator.isAvailable ? '$calendarCheck' : '$calendarRemove'),
    }));
    const __VLS_22 = __VLS_21({
        icon: (__VLS_ctx.collaborator.isAvailable ? '$calendarCheck' : '$calendarRemove'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    // @ts-ignore
    [collaborator, collaborator,];
}
if (__VLS_ctx.collaborator.document.image) {
    let __VLS_25;
    /** @ts-ignore @type {typeof __VLS_components.vImg | typeof __VLS_components.VImg | typeof __VLS_components.vImg | typeof __VLS_components.VImg} */
    vImg;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
        src: ('/img/' + __VLS_ctx.collaborator.document.image),
    }));
    const __VLS_27 = __VLS_26({
        src: ('/img/' + __VLS_ctx.collaborator.document.image),
    }, ...__VLS_functionalComponentArgsRest(__VLS_26));
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-headline-small text-white" },
    });
    /** @type {__VLS_StyleScopedClasses['text-headline-small']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    (__VLS_ctx.collaborator.name[0]);
    (__VLS_ctx.collaborator.surname[0]);
}
// @ts-ignore
[collaborator, collaborator, collaborator, collaborator,];
var __VLS_16;
(__VLS_ctx.collaborator.surname);
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    ...{ 'onClick': {} },
    icon: "",
    variant: "text",
}));
const __VLS_32 = __VLS_31({
    ...{ 'onClick': {} },
    icon: "",
    variant: "text",
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
let __VLS_35;
const __VLS_36 = ({ click: {} },
    { onClick: (__VLS_ctx.toggleStar) });
const { default: __VLS_37 } = __VLS_33.slots;
let __VLS_38;
/** @ts-ignore @type {typeof __VLS_components.vIcon | typeof __VLS_components.VIcon} */
vIcon;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
    icon: (__VLS_ctx.isStarred ? '$star' : '$starOutline'),
}));
const __VLS_40 = __VLS_39({
    icon: (__VLS_ctx.isStarred ? '$star' : '$starOutline'),
}, ...__VLS_functionalComponentArgsRest(__VLS_39));
// @ts-ignore
[collaborator, toggleStar, isStarred,];
var __VLS_33;
var __VLS_34;
// @ts-ignore
[];
var __VLS_10;
let __VLS_43;
/** @ts-ignore @type {typeof __VLS_components.vCardSubtitle | typeof __VLS_components.VCardSubtitle | typeof __VLS_components.vCardSubtitle | typeof __VLS_components.VCardSubtitle} */
vCardSubtitle;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({}));
const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
const { default: __VLS_48 } = __VLS_46.slots;
(__VLS_ctx.collaborator.title);
// @ts-ignore
[collaborator,];
var __VLS_46;
let __VLS_49;
/** @ts-ignore @type {typeof __VLS_components.vCardSubtitle | typeof __VLS_components.VCardSubtitle | typeof __VLS_components.vCardSubtitle | typeof __VLS_components.VCardSubtitle} */
vCardSubtitle;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({}));
const __VLS_51 = __VLS_50({}, ...__VLS_functionalComponentArgsRest(__VLS_50));
const { default: __VLS_54 } = __VLS_52.slots;
let __VLS_55;
/** @ts-ignore @type {typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon} */
vIcon;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
    icon: "$location",
}));
const __VLS_57 = __VLS_56({
    icon: "$location",
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
(__VLS_ctx.collaborator.office.name);
(__VLS_ctx.collaborator.isAvailable ? "Disponible" : "Indisponible");
// @ts-ignore
[collaborator, collaborator,];
var __VLS_52;
let __VLS_60;
/** @ts-ignore @type {typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText} */
vCardText;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent1(__VLS_60, new __VLS_60({}));
const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
const { default: __VLS_65 } = __VLS_63.slots;
(__VLS_ctx.collaborator.highlight);
// @ts-ignore
[collaborator,];
var __VLS_63;
for (const [skill] of __VLS_vFor((__VLS_ctx.collaborator.skills))) {
    let __VLS_66;
    /** @ts-ignore @type {typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components.vChip | typeof __VLS_components.VChip} */
    vChip;
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent1(__VLS_66, new __VLS_66({
        skill: skill,
        key: (skill.id),
        color: "var(--neo-dark-blue)",
        variant: "outlined",
        ...{ class: "mb-1 ms-1" },
    }));
    const __VLS_68 = __VLS_67({
        skill: skill,
        key: (skill.id),
        color: "var(--neo-dark-blue)",
        variant: "outlined",
        ...{ class: "mb-1 ms-1" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['ms-1']} */ ;
    const { default: __VLS_71 } = __VLS_69.slots;
    (skill);
    // @ts-ignore
    [collaborator,];
    var __VLS_69;
    // @ts-ignore
    [];
}
let __VLS_72;
/** @ts-ignore @type {typeof __VLS_components.vCardActions | typeof __VLS_components.VCardActions | typeof __VLS_components.vCardActions | typeof __VLS_components.VCardActions} */
vCardActions;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent1(__VLS_72, new __VLS_72({
    ...{ class: "justify-center" },
}));
const __VLS_74 = __VLS_73({
    ...{ class: "justify-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
const { default: __VLS_77 } = __VLS_75.slots;
let __VLS_78;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_79 = __VLS_asFunctionalComponent1(__VLS_78, new __VLS_78({
    ...{ 'onClick': {} },
    variant: "flat",
    rounded: "xl",
    ...{ class: "text-white" },
    width: "100%",
}));
const __VLS_80 = __VLS_79({
    ...{ 'onClick': {} },
    variant: "flat",
    rounded: "xl",
    ...{ class: "text-white" },
    width: "100%",
}, ...__VLS_functionalComponentArgsRest(__VLS_79));
let __VLS_83;
const __VLS_84 = ({ click: {} },
    { onClick: (__VLS_ctx.goToDetail) });
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
const { default: __VLS_85 } = __VLS_81.slots;
{
    const { prepend: __VLS_86 } = __VLS_81.slots;
    let __VLS_87;
    /** @ts-ignore @type {typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon} */
    vIcon;
    // @ts-ignore
    const __VLS_88 = __VLS_asFunctionalComponent1(__VLS_87, new __VLS_87({
        icon: "$magnify",
    }));
    const __VLS_89 = __VLS_88({
        icon: "$magnify",
    }, ...__VLS_functionalComponentArgsRest(__VLS_88));
    // @ts-ignore
    [goToDetail,];
}
// @ts-ignore
[];
var __VLS_81;
var __VLS_82;
// @ts-ignore
[];
var __VLS_75;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    props: {
        collaborator: {
            type: Object,
            required: true,
        },
    },
});
export default {};
