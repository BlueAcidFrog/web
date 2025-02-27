import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'

import { pb16, pb32, pb64 } from '../../freestanding/utils/padding.module.css'
import * as styles from './banner.module.css'

export interface PropTypes {
  id: string
  title: string
  small?: boolean
  text?: React.ReactElement
  button: React.ReactElement
}

const Banner = ({ id, title, text, button, small }: PropTypes) => (
  <div id={id} className={cn(styles.bannerPrimary, 'background-is-themed')}>
    <Container
      fluid={true}
      justify={'center'}
      alignItems={'center'}
      className={cn(styles.bannerPrimary, pb64)}
    >
      <Grid lg={8} md={10} sm={12} xs={12}>
        <Container alignItems={'start'}>
          <Grid lg={4} md={4} sm={12} xs={12}>
            {!small ? (
              <h1 className={cn('font-h1', pb32)}>{title}</h1>
            ) : (
              <h3 className={cn('font-h3', pb32)}>{title}</h3>
            )}
          </Grid>
          <Grid lg={8} md={8} sm={12} xs={12}>
            <p className={cn('font-p-large', pb16)}>{text}</p>
            <MoleculeInteraction>{button}</MoleculeInteraction>
          </Grid>
        </Container>
      </Grid>
    </Container>
  </div>
)

export default Banner
