# go to https://twitter.com/following

for (const r of document.querySelectorAll('[data-testid$="-unfollow"]')) { r.click() }
for (const r of document.querySelectorAll('[data-testid$="confirmationSheetConfirm"]')) { r.click() }
