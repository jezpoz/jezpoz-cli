import {expect, test} from '@oclif/test'
import {prompts} from 'prompts'
import * as sinon from 'sinon'

describe('new', () => {
  describe('when the user doesnt specify what appType they want', () => {
    const selectStub = sinon.stub().resolves('next-sanity-site')
    const newSanitySiteStub = sinon.stub().resolves()

    test
    .stub(prompts, 'select', selectStub)
    .stub('NewNextSanitySite', 'run', newSanitySiteStub)
    .stdout()
    .command(['new'])

    it('should ask the user what appType they want', () => {
      expect(selectStub.calledOnce)
    })
    it('should call the command for that appType the user spesified', () => {
      expect(newSanitySiteStub.calledOnce)
    })
  })
  describe('when the user has spesified an app name, but not a appType', () => {
    const selectStub = sinon.stub().resolves('next-sanity-site')
    const newSanitySiteStub = sinon.stub().resolves()

    test
    .stub(prompts, 'select', selectStub)
    .stub('NewNextSanitySite', 'run', newSanitySiteStub)
    .stdout()
    .command(['new', 'appName'])

    it('should as the user what appType they want', () => {
      expect(selectStub.calledOnce)
    })
    it('should call the command that the user spesified with supplied appName', () => {
      expect(newSanitySiteStub.calledOnce)
      expect(newSanitySiteStub.calledWith(['appName']))
    })
  })
})
