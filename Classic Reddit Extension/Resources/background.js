const OLD_REDDIT = 'old.reddit.com';

browser.tabs.onUpdated.addListener(async (tabId) => {
    const currentTab = await browser.tabs.getCurrent();
    const target = currentTab.pendingUrl || currentTab.url;

    if (!target.includes('reddit.com')) {
        return;
    }

    if (target.includes(OLD_REDDIT)) {
        browser.tabs.insertCSS(tabId, {
            cssOrigin: "user",
            file: "/custom_styles.css",
            runAt: "document_start"
        });
        browser.tabs.executeScript(tabId, {
            file: '/content.js',
            runAt: 'document_end'
        });
        return;
    }

    const url = new URL(target);
    url.host = await getSetting('domain', 'old.reddit.com');

    browser.tabs.update(tabId, {
        loadReplace: true,
        url: url.href
    });
})
