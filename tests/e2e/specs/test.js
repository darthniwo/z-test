// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  '@tags': ['Home page tests'],
  'Navigation test': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('.main-header nav')
      .assert.elementPresent('a[href^="/past-trials"]')
      .click('a[href^="/past-trials"]')
      .waitForElementVisible('.past-trials')
      .pause(1000)
      .assert.elementPresent('a[href^="/how"]')
      .click('a[href^="/how"]')
      .waitForElementVisible('.how')
      .pause(1000)
      .assert.elementPresent('a[href^="/login"]')
      .click('a[href^="/login"]')
      .waitForElementVisible('.login')
      .pause(1000)
      .end();
  },
  'Vote e2e': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('.main-banner')
      .assert.elementPresent('.banner-card')
      .assert.containsText('.banner-card', 'Pope Francis')
      .moveToElement('.card-feed', 10, 10)
      .waitForElementVisible('.card-feed div:first-child .person-card')
      .pause(1000)
      .click('#p1upvote')
      .pause(500)
      .click('#p1_vote-btn')
      .waitForElementVisible('.reset-vote')
      .pause(1000)
      .end();
  },
};
