import React from 'react';
import Link from 'next/link';
import { Segment, Container, Grid, List } from 'semantic-ui-react';

const Footer = () => (
  <Segment
    vertical
    as="footer"
    style={{
      padding: "1.5em 0em",
      marginTop: "3em",
      borderTop: "1px solid #f2f2f2",
      background: "#2c2b29",
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <List>
              <List.Item>
                <Link href="/about">
                  <a
                  style={{
                    color:"white"
                  }}
                  >Nosotros</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={6}>
          <List>
              <List.Item>
                <Link href="/">
                  <a
                    style={{
                      color:"white"
                    }}
                  >Servicios</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
          <List>
              <List.Item>
                <Link href="/">
                  <a
                    style={{
                      color:"white"
                    }}
                    >Contactanos</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

    <style jsx global>{`
      .colophon {
        text-align: center;
        margin-top: 3.2rem;
        font-size: 0.8rem;
      }

      .colophon-entry {
        color: grey;
        margin-bottom: 0;
      }

      .ui.grid>.row>.column {
        text-align: center;
      }
    `}</style>
  </Segment>
);

export default Footer;
