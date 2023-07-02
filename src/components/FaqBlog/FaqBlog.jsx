import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './FaqBlog.css';

const FaqBlog = () => {
  return (
    <div className="faq">
      <h3>FAQ</h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Difference between props and state
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Props stand for properties. Props are used to pass data from a
              parent component to a child component. They are read only that
              means child component can't update or modify the passed data
              through props. Props are passed down the component tree, and any
              changes to them in the parent component will trigger re-render of
              the child component. State is used to manage data within a
              component. State is private to a component, meaning that it can
              only be accessed and modified within that component. When the
              state of a component changes, React will automatically re-render
              the component to reflect those changes. In summary, props are used
              to pass data from parent to child components, while state is used
              to manage data that changes within a component. Both props and
              state are important tools for building React applications, and
              understanding the differences between them is essential for
              writing efficient and effective code.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How does useState work?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              useState is React Hook that allows you to add state to a
              functional component. It returns an array with two values: the
              current state and a function to update it. The Hook takes an
              initial state value as an argument and returns an updated state
              value whenever the setter function is called.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Purpose of the useEffect other than fetching data.
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              There are several other purpose of useEffect hook rather than
              fetching data. useEffect can be used to update the document title
              needs to change based on the current page or state. This can be used to manage subscriptions to external data sources, such as web sockets or event streams. this can also be used to trigger animations when certain conditions are met. For managing timers and intervals that can be used, ensuring that they are cleaned up properly when the component is unmounted.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How does React work?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              React is a JavaScript library for building user interfaces. When a React application is loaded, it typically consists of a hierarchy of components, each representing a part of the UI. Components can be nested inside other components, creating a tree like structure known as the component tree. Each component can have its own state and can render a view based on that state. When the state of a component changes, React will automatically re-render that component and any child components that depend on its state. This is done efficiently using a process called reconciliation, where React compares the new component tree with the previous one and determines what changes need to be made to update the UI. React also provides a number of other features that make it easier to build complex UIs, such as hooks for managing state and side effects, a virtual DOM for efficient rendering, and tools for testing and debugging.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqBlog;
