# INTRO
It is a just usage of Playwright with Zoovu admin panel

Playwright gives unlimited **e2e tests**. See: https://playwright.dev/

------

# INSTALL
```npx playwright install```

>> Prepare `.env` (see `.env.example`)

------

# RUN test (+ optionally SEE report)
## Run 
```yarn test```<br/>
(headless, no trace)

## Run & read with screenshots
```yarn test-trace```<br/>
(headless, with trace/screenshots, open adn read report)

## Run & observe in browsers & read with screenshots
```yarn see-test ```<br/>
(headed, with trace/screenshots, open and read report)

------

# See last-test's REPORT
```yarn report```

------

# Advanced
## Run Codegen
```npx playwright codegen <your_page_url>```

> Example: <br/>`npx playwright codegen https://qa10-admin.zoovu.com/accounts`
