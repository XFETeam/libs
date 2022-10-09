(function () {
    const xoyoAuth = (xoyo) => {
        if (xoyo) {
            return `<script>${require('!!raw-loader!./xoyo').default}</script>`
        } else {
            return `<script>${require('!!raw-loader!./invalid-redierct').default}</script>`
        }
    };

    const dailyAuth = (daily, limitOnlyHasJx3RoleAccessInDaily) => {
        if (daily) {
            return `
                ${limitOnlyHasJx3RoleAccessInDaily?'<script>window.LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY = true;</script>':''}
                <script>${require('!!raw-loader!./jianghudaily/auth-with-token').default}</script>
                <script>${require('!!raw-loader!./jianghudaily/get-account-info').default}</script>            
            `
        }
        return '';
    };

    const weixinQQAuth = (weixinQQ) => {
        if (weixinQQ) {
            return `
                <script>${require('!!raw-loader!./qq-weixin-auth/get-account-info').default}</script>
                <script>${require('!!raw-loader!./qq-weixin-auth/get-auth-url').default}</script>            
            `
        }
        return '';
    };

    const debugInfo = (debug) => {
        if (debug) {
            return `
                <script>
                    setTimeout(function() {
                        alert('THIRD_PARTY_AUTH\\n' + JSON.stringify(window.THIRD_PARTY_AUTH)); alert('XOYO_AUTH\\n' + JSON.stringify(window.XOYO_AUTH));
                    }, 800)
                </script>
            `
        }
        return '';
    };


    const defaultConfig = {
        daily: true,
        limitOnlyHasJx3RoleAccessInDaily: false,
        weixinQQ: true,
        xoyo: true,
        debug: false
    };

    window.__XFE_UNIVERSAL_AUTH_CONFIG__ = {...defaultConfig, ...window.__XFE_UNIVERSAL_AUTH_CONFIG__ || {}};

    const {xoyo, daily, weixinQQ, debug} = window.__XFE_UNIVERSAL_AUTH_CONFIG__;

    const writelnContent = `
        <script>${require('!!raw-loader!./tools').default}</script>
        <script>${require('!!raw-loader!./global-config').default}</script>
        ${dailyAuth(daily)}
        ${weixinQQAuth(weixinQQ)}
        ${xoyoAuth(xoyo)}
        ${debugInfo(debug)}
    `;

    document.writeln(writelnContent);
})();
