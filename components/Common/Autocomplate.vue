<template>
	<v-autocomplete
		:persistent-placeholder="persistentPlaceholder"
		:prepend-inner-icon="prependInnerIcon"
		:append-outer-icon="appendOuterIcon"
		:auto-select-first="autoSelectFirst"
		:success-messages="successMessages"
		:value-comparator="valueComparator"
		:background-color="backgroundColor"
		:validate-on-blur="validateOnBlur"
		:persistent-hint="persistentHint"
		:deletable-chips="deletableChips"
		:error-messages="errorMessages"
		:disable-lookup="disableLookup"
		:loader-height="loaderHeight"
		:item-disabled="itemDisabled"
		:hide-selected="hideSelected"
		:counter-value="counterValue"
		:solo-inverted="soloInverted"
		:return-object="returnObject"
		:open-on-clear="openOnClear"
		:prepend-icon="prependIcon"
		:hide-details="hideDetails"
		:search-input="searchInput"
		:hide-no-data="hideNoData"
		:no-data-text="noDataText"
		:append-icon="appendIcon"
		:placeholder="placeholder"
		:cache-items="cacheItems"
		:error-count="errorCount"
		:small-chips="smallChips"
		:single-line="singleLine"
		:item-color="itemColor"
		:item-value="itemValue"
		:menu-props="menuProps"
		:full-width="fullWidth"
		:clear-icon="clearIcon"
		:clearable="clearable"
		:autofocus="autofocus"
		:item-text="itemText"
		:no-filter="noFilter"
		:multiple="multiple"
		:messages="messages"
		:outlined="outlined"
		:readonly="readonly"
		:disabled="disabled"
		:loading="loading"
		:counter="counter"
		:rounded="rounded"
		:success="success"
		:reverse="reverse"
		:filled="filled"
		:attach="attach"
		:filter="filter"
		:prefix="prefix"
		:height="height"
		:shaped="shaped"
		:suffix="suffix"
		:chips="chips"
		:color="color"
		:dense="dense"
		:items="items"
		:error="error"
		:eager="eager"
		:rules="rules"
		:label="label"
		:light="light"
		:value="value"
		:dark="dark"
		:flat="flat"
		:hint="hint"
		:solo="solo"
	></v-autocomplete>
</template>

<script>
export default {
	name: 'Autocompletes',
	props: {
		appendIcon: {
			type: String,
		}, // آیکون اضافه شده به انتهای فیلد
		appendOuterIcon: {
			type: String,
		}, // آیکون اضافه شده به بیرون انتهای فیلد
		attach: {
			type: [Boolean, String],
		}, // المان یا selector برای attach کردن منو
		autoSelectFirst: {
			type: Boolean,
		}, // آیا اولین آیتم به طور خودکار انتخاب شود؟
		autofocus: {
			type: Boolean,
		}, // آیا فیلد به طور خودکار فوکوس شود؟
		backgroundColor: {
			type: String,
		}, // رنگ پس‌زمینه فیلد
		cacheItems: {
			type: Boolean,
		}, // آیا آیتم‌ها باید کش شوند؟
		chips: {
			type: Boolean,
		}, // آیا آیتم‌های انتخاب شده به صورت Chip نمایش داده شوند؟
		clearIcon: {
			type: String,
		}, // آیکون پاک‌کننده فیلد
		clearable: {
			type: Boolean,
		}, // آیا فیلد قابل پاک کردن باشد؟
		color: {
			type: String,
			default : 'primary'
		}, // رنگ اصلی فیلد
		counter: {
			type: [Boolean, Number, String],
		}, // نمایش شمارنده کاراکترها
		counterValue: {
			type: Function,
		}, // تابع محاسبه مقدار شمارنده
		dark: {
			type: Boolean,
		}, // آیا تم تاریک فعال باشد؟
		deletableChips: {
			type: Boolean,
		}, // آیا Chipها قابل حذف باشند؟
		dense: {
			type: Boolean,
		}, // آیا فیلد به صورت فشرده نمایش داده شود؟
		disableLookup: {
			type: Boolean,
		}, // آیا جستجوی آیتم‌ها غیرفعال باشد؟
		disabled: {
			type: Boolean,
		}, // آیا فیلد غیرفعال باشد؟
		eager: {
			type: Boolean,
		}, // آیا محتوای منو به طور eager رندر شود؟
		error: {
			type: Boolean,
		}, // آیا فیلد در حالت خطا باشد؟
		errorCount: {
			type: [Number, String],
		}, // تعداد خطاهای نمایش داده شده
		errorMessages: {
			type: [String, Array],
		}, // پیام‌های خطا
		filled: {
			type: Boolean,
		}, // آیا فیلد به صورت پر شده نمایش داده شود؟
		filter: {
			type: Function,
		}, // تابع فیلتر کردن آیتم‌ها
		flat: {
			type: Boolean,
		}, // آیا فیلد به صورت flat نمایش داده شود؟
		fullWidth: {
			type: Boolean,
		}, // آیا فیلد عرض کامل داشته باشد؟
		height: {
			type: [Number, String],
		}, // ارتفاع فیلد
		hideDetails: {
			type: Boolean,
		}, // آیا جزئیات (مانند خطاها) مخفی شوند؟
		hideNoData: {
			type: Boolean,
		}, // آیا پیام "داده‌ای موجود نیست" مخفی شود؟
		hideSelected: {
			type: Boolean,
		}, // آیا آیتم‌های انتخاب شده از لیست مخفی شوند؟
		hint: {
			type: String,
		}, // متن راهنما
		itemColor: {
			type: String,
		}, // رنگ آیتم‌ها
		itemDisabled: {
			type: [String, Function],
		}, // مشخص کننده غیرفعال بودن آیتم‌ها
		itemText: {
			type: [String, Function],
		}, // مشخص کننده متن آیتم‌ها
		itemValue: {
			type: [String, Function],
		}, // مشخص کننده مقدار آیتم‌ها
		items: {
			type: Array,
		}, // لیست آیتم‌ها
		label: {
			type: String,
		}, // برچسب فیلد
		light: {
			type: Boolean,
		}, // آیا تم روشن فعال باشد؟
		loaderHeight: {
			type: [Number, String],
		}, // ارتفاع لودر
		loading: {
			type: Boolean,
		}, // آیا فیلد در حالت لودینگ باشد؟
		menuProps: {
			type: [String, Array, Object],
		}, // تنظیمات منو
		messages: {
			type: [String, Array],
		}, // پیام‌های نمایش داده شده
		multiple: {
			type: Boolean,
		}, // آیا انتخاب چندگانه فعال باشد؟
		noDataText: {
			type: String,
		}, // متن نمایش داده شده وقتی داده‌ای موجود نیست
		noFilter: {
			type: Boolean,
		}, // آیا فیلتر داخلی غیرفعال باشد؟
		openOnClear: {
			type: Boolean,
		}, // آیا منو پس از پاک کردن فیلد باز شود؟
		outlined: {
			type: Boolean,
		}, // آیا فیلد به صورت outlined نمایش داده شود؟
		persistentHint: {
			type: Boolean,
		}, // آیا متن راهنما همیشه نمایش داده شود؟
		persistentPlaceholder: {
			type: Boolean,
		}, // آیا placeholder همیشه نمایش داده شود؟
		placeholder: {
			type: String,
		}, // متن placeholder
		prefix: {
			type: String,
		}, // پیشوند فیلد
		prependIcon: {
			type: String,
		}, // آیکون اضافه شده به ابتدای فیلد
		prependInnerIcon: {
			type: String,
		}, // آیکون اضافه شده به داخل ابتدای فیلد
		readonly: {
			type: Boolean,
		}, // آیا فیلد فقط قابل خواندن باشد؟
		returnObject: {
			type: Boolean,
		}, // آیا شیء کامل آیتم برگردانده شود؟
		reverse: {
			type: Boolean,
		}, // آیا ترتیب نمایش معکوس شود؟
		rounded: {
			type: Boolean,
		}, // آیا فیلد به صورت گرد نمایش داده شود؟
		rules: {
			type: Array,
		}, // قوانین اعتبارسنجی
		searchInput: {
			type: String,
		}, // مقدار جستجوی ورودی
		shaped: {
			type: Boolean,
		}, // آیا فیلد به صورت شکل‌دار نمایش داده شود؟
		singleLine: {
			type: Boolean,
		}, // آیا فیلد در یک خط نمایش داده شود؟
		smallChips: {
			type: Boolean,
		}, // آیا Chipها به صورت کوچک نمایش داده شوند؟
		solo: {
			type: Boolean,
		}, // آیا فیلد به صورت solo نمایش داده شود؟
		soloInverted: {
			type: Boolean,
		}, // آیا فیلد به صورت solo-inverted نمایش داده شود؟
		success: {
			type: Boolean,
		}, // آیا فیلد در حالت موفقیت باشد؟
		successMessages: {
			type: [String, Array],
		}, // پیام‌های موفقیت
		suffix: {
			type: String,
		}, // پسوند فیلد
		validateOnBlur: {
			type: Boolean,
		}, // آیا اعتبارسنجی پس از خارج شدن از فوکوس انجام شود؟
		value: {
			type: [String, Number, Array, Object],
		}, // مقدار فیلد
		valueComparator: {
			type: Function,
		}, // تابع مقایسه مقدارها
	},
}
</script>
