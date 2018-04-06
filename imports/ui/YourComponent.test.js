import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import YourComponent from './YourComponent';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isClient) {
  describe('YourComponent', function () {
    //Variable Definition
    let call;
    let memoryHistory;
    let Session;
    //Lifecycle hook (is executed before each it)
    beforeEach(() => {
      call = expect.createSpy();
      memoryHistory = {
        ...testHistory,
        push: expect.createSpy()
      };
      Session = {
        set: expect.createSpy()
      };
    });
    //Lifecycle hook (is executed after each it)
    afterEach(() => {
      //your code here
    });
    //standard test cases
    it('should do something', function () {
      const wrapper = mount( <YourComponent title="Test title"/> );
      const buttonText = wrapper.find('button').text();

      expect(buttonText).toBe('Logout');
    });
    it('should do something', function () {
      const title = 'Pick your title';
      const wrapper = mount( <YourComponent title={title}/> );
      const titleFromPH = wrapper.find('h1').text();
      expect(titleFromPH).toBe(title);
    });
    //test cases with call to a function and that use a history object
    it('should do something', function () {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <Editor history={memoryHistory} call={call} selectedNoteId={notes[0]._id} note={notes[0]} Session={Session}/>
        </MemoryRouter>
      );
      wrapper.find('button').simulate('click');
      expect(call).toHaveBeenCalledWith('notes.remove', notes[0]._id);
      expect(memoryHistory.push).toHaveBeenCalledWith('/dashboard');
    });
    it('should do something', function () {
      const newBody = 'This is my new body text'
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <Editor history={memoryHistory} call={call} selectedNoteId={notes[0]._id} note={notes[0]} Session={Session}/>
        </MemoryRouter>
      );
      wrapper.find('textarea').simulate('change', {
        target: {
          value: newBody
        }
      });
      expect(wrapper.find(Editor).instance().state.body).toBe(newBody);
      expect(call).toHaveBeenCalledWith('notes.update', notes[0]._id, {body: newBody});
    });

  });
}
