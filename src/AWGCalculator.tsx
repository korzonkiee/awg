import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { TextField, Button, CardContent, Card } from '@material-ui/core';

export interface Props {
}

export interface State {
  readonly value: number;
}

export default class AWGCalculator extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  public render() {
    return (
        <Container maxWidth="sm">
          <Card style={{minWidth: 250}}>
            <CardContent>
              <TextField value={this.state.value} onChange={(e) => {
                console.log(e);
                if (e.target) {
                  this.setState({
                    value: Number(e.target.value)
                  });
                }
              }} />

              <Button style={{marginLeft: 16}} size={"small"} onClick={(e) => {
                alert(`Liczę dla wartości ${this.state.value}`);
              }}>Policz</Button>
            </CardContent>
          </Card>
        </Container>
    );
  }
}
