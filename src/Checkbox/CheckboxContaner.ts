import * as React from 'react';

import { Checkbox } from './Checkbox';

type CheckboxContainerProps = {
  // Свойства задаваемые извне
    isChecked?: boolean;
}

type CheckboxContainerState = {
  // То что меняется в процессе работы компонента
    isChecked: boolean;
}

class CheckboxContaner extends React.Component<CheckboxContainerProps, CheckboxContainerState> {

    constructor(props: CheckboxContainerProps) {
      super(props);

      this.state = {
        isChecked: props.isChecked
      };
    }

    public render():JSX.Element {
      return React.createElement(Checkbox, {
        isChecked: this.state.isChecked,
        onCheckboxChange: this.onCheckboxChange
      });
    }

    protected onCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
      // функция меняющая текущее значение   
      this.setState({ isChecked: !this.state.isChecked });
    }
}