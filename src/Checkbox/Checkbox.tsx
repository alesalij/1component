import * as React from 'react';

type CheckboxProps = {
    isChecked: boolean;
    onCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Checkbox(props: CheckboxProps): JSX.Element {
    return (
      <div className="Checkbox">
        <input
            className="Checkbox__input"
            type="checkbox"
            id="one"
            name="one"
            checked={props.isChecked}
            onChange={props.onCheckboxChange}
        />
        <label className="Checkbox__label" htmlFor="one">My Check</label>
      </div>
    );
}

export { Checkbox };