import React from 'react'
import { Pagination, NextUIProvider, Card, Text, Avatar, Grid } from '@nextui-org/react';

export default function NextUI() {
    return (
        <div>
            <Pagination total={13} initialPage={1}/>
            <Card css={{ mw: "400px" }}>
      <Card.Body>
        <Text>Default Card</Text>
      </Card.Body>
    </Card>
    <Grid.Container gap={2}>
      <Grid>
        <Avatar 
          squared 
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          text="Junior" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          text="Jane" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          text="Joe" />
      </Grid>
    </Grid.Container>
        </div>
    )
}