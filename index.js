const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const body = core.getInput('body')

    const pattern = core.getInput('pattern').replace(/\//g, '\\/')

    const regex = new RegExp('(' + pattern + '[^\\s]+)');
    const url = body.match(regex)
    core.info(regex);
    core.info(url)

    if (url) {
      core.setOutput('url', url[0])
    } else {
      core.setOutput('url', '')
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
