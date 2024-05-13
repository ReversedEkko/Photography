
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const emeraldTheme: CustomThemeConfig = {
    name: 'emeraldTheme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #ccffcc 
		"--color-primary-50": "247 255 247", // #f7fff7
		"--color-primary-100": "245 255 245", // #f5fff5
		"--color-primary-200": "242 255 242", // #f2fff2
		"--color-primary-300": "235 255 235", // #ebffeb
		"--color-primary-400": "219 255 219", // #dbffdb
		"--color-primary-500": "204 255 204", // #ccffcc
		"--color-primary-600": "184 230 184", // #b8e6b8
		"--color-primary-700": "153 191 153", // #99bf99
		"--color-primary-800": "122 153 122", // #7a997a
		"--color-primary-900": "100 125 100", // #647d64
		// secondary | #80ff80 
		"--color-secondary-50": "236 255 236", // #ecffec
		"--color-secondary-100": "230 255 230", // #e6ffe6
		"--color-secondary-200": "223 255 223", // #dfffdf
		"--color-secondary-300": "204 255 204", // #ccffcc
		"--color-secondary-400": "166 255 166", // #a6ffa6
		"--color-secondary-500": "128 255 128", // #80ff80
		"--color-secondary-600": "115 230 115", // #73e673
		"--color-secondary-700": "96 191 96", // #60bf60
		"--color-secondary-800": "77 153 77", // #4d994d
		"--color-secondary-900": "63 125 63", // #3f7d3f
		// tertiary | #8f001a 
		"--color-tertiary-50": "238 217 221", // #eed9dd
		"--color-tertiary-100": "233 204 209", // #e9ccd1
		"--color-tertiary-200": "227 191 198", // #e3bfc6
		"--color-tertiary-300": "210 153 163", // #d299a3
		"--color-tertiary-400": "177 77 95", // #b14d5f
		"--color-tertiary-500": "143 0 26", // #8f001a
		"--color-tertiary-600": "129 0 23", // #810017
		"--color-tertiary-700": "107 0 20", // #6b0014
		"--color-tertiary-800": "86 0 16", // #560010
		"--color-tertiary-900": "70 0 13", // #46000d
		// success | #80ff80 
		"--color-success-50": "236 255 236", // #ecffec
		"--color-success-100": "230 255 230", // #e6ffe6
		"--color-success-200": "223 255 223", // #dfffdf
		"--color-success-300": "204 255 204", // #ccffcc
		"--color-success-400": "166 255 166", // #a6ffa6
		"--color-success-500": "128 255 128", // #80ff80
		"--color-success-600": "115 230 115", // #73e673
		"--color-success-700": "96 191 96", // #60bf60
		"--color-success-800": "77 153 77", // #4d994d
		"--color-success-900": "63 125 63", // #3f7d3f
		// warning | #ff8040 
		"--color-warning-50": "255 236 226", // #ffece2
		"--color-warning-100": "255 230 217", // #ffe6d9
		"--color-warning-200": "255 223 207", // #ffdfcf
		"--color-warning-300": "255 204 179", // #ffccb3
		"--color-warning-400": "255 166 121", // #ffa679
		"--color-warning-500": "255 128 64", // #ff8040
		"--color-warning-600": "230 115 58", // #e6733a
		"--color-warning-700": "191 96 48", // #bf6030
		"--color-warning-800": "153 77 38", // #994d26
		"--color-warning-900": "125 63 31", // #7d3f1f
		// error | #ff3838 
		"--color-error-50": "255 225 225", // #ffe1e1
		"--color-error-100": "255 215 215", // #ffd7d7
		"--color-error-200": "255 205 205", // #ffcdcd
		"--color-error-300": "255 175 175", // #ffafaf
		"--color-error-400": "255 116 116", // #ff7474
		"--color-error-500": "255 56 56", // #ff3838
		"--color-error-600": "230 50 50", // #e63232
		"--color-error-700": "191 42 42", // #bf2a2a
		"--color-error-800": "153 34 34", // #992222
		"--color-error-900": "125 27 27", // #7d1b1b
		// surface | #353535 
		"--color-surface-50": "225 225 225", // #e1e1e1
		"--color-surface-100": "215 215 215", // #d7d7d7
		"--color-surface-200": "205 205 205", // #cdcdcd
		"--color-surface-300": "174 174 174", // #aeaeae
		"--color-surface-400": "114 114 114", // #727272
		"--color-surface-500": "53 53 53", // #353535
		"--color-surface-600": "48 48 48", // #303030
		"--color-surface-700": "40 40 40", // #282828
		"--color-surface-800": "32 32 32", // #202020
		"--color-surface-900": "26 26 26", // #1a1a1a
		
	}
}