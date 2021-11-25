const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const body = core.getInput('body')

    const pattern = core.getInput('pattern').replaceAll('/', '\\/')

    const url = body.match('/(' + pattern + '[^\\s]+)/')
    core.info('/(' + pattern + '[^\\s]+)/');
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
