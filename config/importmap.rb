# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "ct", to: "ct.js"
pin "act-ct", to: "act-ct.js"
pin "bootin-ct", to: "bootin-ct.js"
pin "sound-ct", to: "sound-ct.js"
pin "keymap-ct", to: "keymap-ct.js"
pin "turmux-ct", to: "turmux-ct.js"
