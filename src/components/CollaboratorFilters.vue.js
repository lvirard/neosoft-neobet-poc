import { useCollaboratorStore } from "@/stores/collaboratorsListStore";
import { JobRepository } from "@/types/JobRepository";
const store = useCollaboratorStore();
const titleOptions = Object.values(JobRepository);
const officeOptions = ["Brest", "Rennes", "Paris"];
const seniorityOptions = ["Débutant", "Confirmé", "Senior"];
function onTitleChange(value) {
    store.setFilter("title", value);
}
const __VLS_ctx = {
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
    ...{ class: "pa-4 mb-4" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "pa-4 mb-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
const { default: __VLS_6 } = __VLS_3.slots;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer} */
vContainer;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ class: "pa-0" },
}));
const __VLS_9 = __VLS_8({
    ...{ class: "pa-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['pa-0']} */ ;
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components.vRow | typeof __VLS_components.VRow} */
vRow;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    density: "comfortable",
}));
const __VLS_15 = __VLS_14({
    density: "comfortable",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
const { default: __VLS_18 } = __VLS_16.slots;
let __VLS_19;
/** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
vCol;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    cols: "12",
    sm: "3",
}));
const __VLS_21 = __VLS_20({
    cols: "12",
    sm: "3",
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
const { default: __VLS_24 } = __VLS_22.slots;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.vSelect | typeof __VLS_components.VSelect} */
vSelect;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.store.filters.office),
    items: (__VLS_ctx.officeOptions),
    label: "Secteur géographique",
    clearable: true,
    density: "comfortable",
    hideDetails: true,
}));
const __VLS_27 = __VLS_26({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.store.filters.office),
    items: (__VLS_ctx.officeOptions),
    label: "Secteur géographique",
    clearable: true,
    density: "comfortable",
    hideDetails: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
let __VLS_30;
const __VLS_31 = ({ 'update:modelValue': {} },
    { 'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.store.setFilter('office', $event);
            // @ts-ignore
            [store, store, officeOptions,];
        } });
var __VLS_28;
var __VLS_29;
// @ts-ignore
[];
var __VLS_22;
let __VLS_32;
/** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
vCol;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
    cols: "12",
    sm: "3",
}));
const __VLS_34 = __VLS_33({
    cols: "12",
    sm: "3",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const { default: __VLS_37 } = __VLS_35.slots;
let __VLS_38;
/** @ts-ignore @type {typeof __VLS_components.vSelect | typeof __VLS_components.VSelect} */
vSelect;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.store.filters.title),
    items: (__VLS_ctx.titleOptions),
    label: "Métier",
    clearable: true,
    density: "comfortable",
    hideDetails: true,
}));
const __VLS_40 = __VLS_39({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.store.filters.title),
    items: (__VLS_ctx.titleOptions),
    label: "Métier",
    clearable: true,
    density: "comfortable",
    hideDetails: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_39));
let __VLS_43;
const __VLS_44 = ({ 'update:modelValue': {} },
    { 'onUpdate:modelValue': (__VLS_ctx.onTitleChange) });
var __VLS_41;
var __VLS_42;
// @ts-ignore
[store, titleOptions, onTitleChange,];
var __VLS_35;
let __VLS_45;
/** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
vCol;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent1(__VLS_45, new __VLS_45({
    cols: "12",
    sm: "3",
}));
const __VLS_47 = __VLS_46({
    cols: "12",
    sm: "3",
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
const { default: __VLS_50 } = __VLS_48.slots;
let __VLS_51;
/** @ts-ignore @type {typeof __VLS_components.vSelect | typeof __VLS_components.VSelect} */
vSelect;
// @ts-ignore
const __VLS_52 = __VLS_asFunctionalComponent1(__VLS_51, new __VLS_51({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.store.filters.seniority),
    items: (__VLS_ctx.seniorityOptions),
    label: "Expérience",
    clearable: true,
    density: "comfortable",
    hideDetails: true,
}));
const __VLS_53 = __VLS_52({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.store.filters.seniority),
    items: (__VLS_ctx.seniorityOptions),
    label: "Expérience",
    clearable: true,
    density: "comfortable",
    hideDetails: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_52));
let __VLS_56;
const __VLS_57 = ({ 'update:modelValue': {} },
    { 'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.store.setFilter('seniority', $event);
            // @ts-ignore
            [store, store, seniorityOptions,];
        } });
var __VLS_54;
var __VLS_55;
// @ts-ignore
[];
var __VLS_48;
let __VLS_58;
/** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
vCol;
// @ts-ignore
const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
    cols: "12",
    sm: "3",
}));
const __VLS_60 = __VLS_59({
    cols: "12",
    sm: "3",
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
const { default: __VLS_63 } = __VLS_61.slots;
let __VLS_64;
/** @ts-ignore @type {typeof __VLS_components.vTextField | typeof __VLS_components.VTextField} */
vTextField;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent1(__VLS_64, new __VLS_64({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.store.filters.search),
    label: "Rechercher par mots clés",
    clearable: true,
    density: "comfortable",
    hideDetails: true,
}));
const __VLS_66 = __VLS_65({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.store.filters.search),
    label: "Rechercher par mots clés",
    clearable: true,
    density: "comfortable",
    hideDetails: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
let __VLS_69;
const __VLS_70 = ({ 'update:modelValue': {} },
    { 'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.store.setFilter('search', $event);
            // @ts-ignore
            [store, store,];
        } });
var __VLS_67;
var __VLS_68;
// @ts-ignore
[];
var __VLS_61;
// @ts-ignore
[];
var __VLS_16;
let __VLS_71;
/** @ts-ignore @type {typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components.vRow | typeof __VLS_components.VRow} */
vRow;
// @ts-ignore
const __VLS_72 = __VLS_asFunctionalComponent1(__VLS_71, new __VLS_71({
    align: "center",
    density: "comfortable",
    justify: "space-between",
}));
const __VLS_73 = __VLS_72({
    align: "center",
    density: "comfortable",
    justify: "space-between",
}, ...__VLS_functionalComponentArgsRest(__VLS_72));
const { default: __VLS_76 } = __VLS_74.slots;
let __VLS_77;
/** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
vCol;
// @ts-ignore
const __VLS_78 = __VLS_asFunctionalComponent1(__VLS_77, new __VLS_77({
    cols: "12",
    sm: "auto",
}));
const __VLS_79 = __VLS_78({
    cols: "12",
    sm: "auto",
}, ...__VLS_functionalComponentArgsRest(__VLS_78));
const { default: __VLS_82 } = __VLS_80.slots;
let __VLS_83;
/** @ts-ignore @type {typeof __VLS_components.vSwitch | typeof __VLS_components.VSwitch} */
vSwitch;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent1(__VLS_83, new __VLS_83({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.store.filters.isAvailable),
    label: "Disponibles",
    color: "primary",
    hideDetails: true,
    density: "comfortable",
}));
const __VLS_85 = __VLS_84({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.store.filters.isAvailable),
    label: "Disponibles",
    color: "primary",
    hideDetails: true,
    density: "comfortable",
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
let __VLS_88;
const __VLS_89 = ({ 'update:modelValue': {} },
    { 'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.store.setFilter('isAvailable', $event ?? undefined);
            // @ts-ignore
            [store, store,];
        } });
var __VLS_86;
var __VLS_87;
// @ts-ignore
[];
var __VLS_80;
let __VLS_90;
/** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
vCol;
// @ts-ignore
const __VLS_91 = __VLS_asFunctionalComponent1(__VLS_90, new __VLS_90({
    cols: "12",
    sm: "auto",
    ...{ class: "d-flex justify-end justify-sm-end" },
}));
const __VLS_92 = __VLS_91({
    cols: "12",
    sm: "auto",
    ...{ class: "d-flex justify-end justify-sm-end" },
}, ...__VLS_functionalComponentArgsRest(__VLS_91));
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-sm-end']} */ ;
const { default: __VLS_95 } = __VLS_93.slots;
let __VLS_96;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_97 = __VLS_asFunctionalComponent1(__VLS_96, new __VLS_96({
    ...{ 'onClick': {} },
    variant: "text",
    color: "secondary",
    hideDetails: true,
    density: "comfortable",
}));
const __VLS_98 = __VLS_97({
    ...{ 'onClick': {} },
    variant: "text",
    color: "secondary",
    hideDetails: true,
    density: "comfortable",
}, ...__VLS_functionalComponentArgsRest(__VLS_97));
let __VLS_101;
const __VLS_102 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.store.resetFilters();
            // @ts-ignore
            [store,];
        } });
const { default: __VLS_103 } = __VLS_99.slots;
// @ts-ignore
[];
var __VLS_99;
var __VLS_100;
// @ts-ignore
[];
var __VLS_93;
// @ts-ignore
[];
var __VLS_74;
// @ts-ignore
[];
var __VLS_10;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
