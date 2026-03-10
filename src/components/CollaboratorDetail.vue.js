const __VLS_props = defineProps({
    collaborator: {
        type: Object,
        required: true,
    },
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar} */
vAvatar;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    color: "var(--neo-dark-blue)",
    badge: ({ color: __VLS_ctx.collaborator.isAvailable ? 'green' : 'red' }),
}));
const __VLS_2 = __VLS_1({
    color: "var(--neo-dark-blue)",
    badge: ({ color: __VLS_ctx.collaborator.isAvailable ? 'green' : 'red' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
{
    const { badge: __VLS_6 } = __VLS_3.slots;
    let __VLS_7;
    /** @ts-ignore @type {typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon} */
    vIcon;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        icon: (__VLS_ctx.collaborator.isAvailable ? '$calendarCheck' : '$calendarRemove'),
    }));
    const __VLS_9 = __VLS_8({
        icon: (__VLS_ctx.collaborator.isAvailable ? '$calendarCheck' : '$calendarRemove'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    // @ts-ignore
    [collaborator, collaborator,];
}
if (__VLS_ctx.collaborator.document.image) {
    let __VLS_12;
    /** @ts-ignore @type {typeof __VLS_components.vImg | typeof __VLS_components.VImg | typeof __VLS_components.vImg | typeof __VLS_components.VImg} */
    vImg;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
        src: ('/img/' + __VLS_ctx.collaborator.document.image),
    }));
    const __VLS_14 = __VLS_13({
        src: ('/img/' + __VLS_ctx.collaborator.document.image),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
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
var __VLS_3;
(__VLS_ctx.collaborator.surname);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-grey" },
});
/** @type {__VLS_StyleScopedClasses['text-grey']} */ ;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon} */
vIcon;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    icon: "$location",
}));
const __VLS_19 = __VLS_18({
    icon: "$location",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
(__VLS_ctx.collaborator.office.name);
(__VLS_ctx.collaborator.seniority);
for (const [experience] of __VLS_vFor((__VLS_ctx.collaborator.experiences))) {
    let __VLS_22;
    /** @ts-ignore @type {typeof __VLS_components.vListItem | typeof __VLS_components.VListItem | typeof __VLS_components.vListItem | typeof __VLS_components.VListItem} */
    vListItem;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
        key: (experience.name),
        ...{ class: "pa-0" },
    }));
    const __VLS_24 = __VLS_23({
        key: (experience.name),
        ...{ class: "pa-0" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    /** @type {__VLS_StyleScopedClasses['pa-0']} */ ;
    const { default: __VLS_27 } = __VLS_25.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
        ...{ class: "text-break text-pre-wrap font-weight-bold" },
    });
    /** @type {__VLS_StyleScopedClasses['text-break']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-pre-wrap']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    (experience.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (experience.description);
    // @ts-ignore
    [collaborator, collaborator, collaborator, collaborator,];
    var __VLS_25;
    // @ts-ignore
    [];
}
let __VLS_28;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
    ...{ 'onClick': {} },
}));
const __VLS_30 = __VLS_29({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
let __VLS_33;
const __VLS_34 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.$router.back();
            // @ts-ignore
            [$router,];
        } });
const { default: __VLS_35 } = __VLS_31.slots;
// @ts-ignore
[];
var __VLS_31;
var __VLS_32;
let __VLS_36;
/** @ts-ignore @type {typeof __VLS_components.vFab | typeof __VLS_components.VFab | typeof __VLS_components.vFab | typeof __VLS_components.VFab} */
vFab;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    app: true,
}));
const __VLS_38 = __VLS_37({
    app: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
const { default: __VLS_41 } = __VLS_39.slots;
{
    const { prepend: __VLS_42 } = __VLS_39.slots;
    let __VLS_43;
    /** @ts-ignore @type {typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon} */
    vIcon;
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
        icon: "$phone",
    }));
    const __VLS_45 = __VLS_44({
        icon: "$phone",
    }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "text-white text-decoration-none" },
    href: "tel:0647237948",
});
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-decoration-none']} */ ;
// @ts-ignore
[];
var __VLS_39;
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
