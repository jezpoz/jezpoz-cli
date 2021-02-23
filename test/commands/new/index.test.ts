import {expect, test} from '@oclif/test'
import {prompts} from 'prompts'
import * as sinon from 'sinon'

describe('new', () => {
  const selectStub = sinon.stub().resolves('next-sanity-site')
  const newSanitySiteStub = sinon.stub().resolves()

  test
  .stub(prompts, 'select', selectStub)
  .stub('NewNextSanitySite', 'run', newSanitySiteStub)
  .stdout()
  .command(['new'])

  it('should as the user what appType they want', () => {
    expect(selectStub.calledOnce)
  })

  it('should call the command that the user spesified', () => {
    expect(newSanitySiteStub.calledOnce)
  })
})
