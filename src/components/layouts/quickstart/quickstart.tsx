import cn from 'classnames'
import React from 'react'

import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'

import {
  pb32,
  pb48,
  pb64,
  pb8
} from '../../freestanding/utils/padding.module.css'
import * as styles from './quickstart.module.css'

export interface QuickstartContent {
  icon: React.ReactElement
  title: React.ReactElement
  description: React.ReactElement
  button?: React.ReactElement
}

export interface PropTypes {
  id: string
  title: React.ReactElement
  description: React.ReactElement
  buttons?: React.ReactNode
  content: Array<QuickstartContent>
}

const Quickstart = ({
  id,
  title,
  description,
  buttons,
  content
}: PropTypes) => (
  <div id={id} className={cn(styles.quickstart)}>
    <Container fluid={true} alignItems={'start'}>
      <Grid lg={4} md={3} sm={12} xs={12} className={cn(pb64)}>
        <ContentText>
          <Molecule>
            <h3 className={cn('font-h3', pb32)}>{title}</h3>
            <p className={cn('font-p', pb32)}>{description}</p>
          </Molecule>
          <MoleculeInteraction>{buttons}</MoleculeInteraction>
        </ContentText>
      </Grid>
      <Grid lg={6} md={8} sm={12} xs={12}>
        <Container alignItems={'start'}>
          {content.map(({ button, icon, description, title }, index) => (
            <Grid
              lg={6}
              md={6}
              sm={6}
              xs={12}
              className={cn(pb48, styles.quickstartContent)}
              key={index}
            >
              <Container flexContainer={'row'} alignItems={'start'}>
                <ColourWrapper className={cn(pb8)} text={'themed-primary'}>
                  {icon}
                </ColourWrapper>
                <ContentText>
                  <h4 className={cn('font-h5', pb8)}>{title}</h4>
                  <p className={cn('font-p-small', pb8)}>{description}</p>
                  <MoleculeInteraction>{button}</MoleculeInteraction>
                </ContentText>
              </Container>
            </Grid>
          ))}
        </Container>
      </Grid>
    </Container>
  </div>
)

export default Quickstart
