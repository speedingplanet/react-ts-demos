import React, { useState } from 'react';

function ChildComponent(): JSX.Element {
  return <h3>Child component</h3>;
}

function WithPropsComponent( props: { name?: string } ): JSX.Element {
  return <h3>Hello, {props.name || 'anonymous'}</h3>;
}

function DefaultComponent() {
  return <h4>Default Component</h4>;
}
export default function DynamicComponents(): JSX.Element {
  const [ customComponent, setCustomComponent ] = useState( '' );

  // let DisplayComponent = customComponent || DefaultComponent;
  const components: {
    [key: string]: React.FC | React.FC<{ name?: string }>;
  } = {
    ChildComponent,
    WithPropsComponent,
  };
  let DisplayComponent = components[customComponent] || DefaultComponent;
  return (
    <div className="row">
      <div className="col">
        <ul style={{ cursor: 'pointer' }}>
          <li onClick={() => setCustomComponent( 'ChildComponent' )}>
            'ChildComponent'
          </li>
          <li onClick={() => setCustomComponent( 'WithPropsComponent' )}>
            WithPropsComponent (no props)
          </li>
          {/* This would work in JavaScript, but not with TypeScript
          <li onClick={() => setCustomComponent( ChildComponent )}>
            ChildComponent
          </li>
          */}
        </ul>
      </div>
      <div className="col">
        <DisplayComponent />
      </div>
    </div>
  );
}
