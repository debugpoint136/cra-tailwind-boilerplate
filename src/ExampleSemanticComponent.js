import React, { Component } from 'react';
import { Button, Grid, Container } from 'semantic-ui-react';

class ExampleSemanticComponent extends Component {

    render() {
        return (
            <Container>
            <Grid>
                <Grid.Column width={15}>
                    <p>
                        Lorem ipsum...
                    </p>
                </Grid.Column>
                <Grid.Column width={1}>
                    <Button basic circular icon="photo" floated="right">test</Button>
                    <Button basic circular icon="video" floated="right" style={{marginTop: 5}}>something</Button>
                </Grid.Column>
            </Grid>
            </Container>
        )
    }

}

export default ExampleSemanticComponent;