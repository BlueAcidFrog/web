import cn from 'classnames'
import React from 'react'
import { useState } from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import Toggle from '../../freestanding/toggle/toggle'

import PricingBlock from './sub-components/pricing-block'
import { PriceTier } from './sub-components/pricing-tier'

import {
  pb32,
  pb64,
  pr24,
  pt64
} from '../../freestanding/utils/padding.module.css'
import * as styles from './pricing.module.css'

export interface PropTypes {
  id: string
  className?: string
  title: React.ReactElement
  description: React.ReactElement
  saas: Array<PriceTier>
  opensource: Array<PriceTier>
}

const Pricing = ({
  id,
  className,
  title,
  description,
  saas,
  opensource
}: PropTypes) => {
  const [togglePricing, setTogglePricing] = useState<boolean>(true)

  const handleToggle = () => {
    setTogglePricing(!togglePricing)
  }

  return (
    <div id={id} className={cn(styles.pricing)}>
      <Container fluid={true} alignItems={'start'}>
        <Grid lg={4} md={3} sm={12} xs={12}>
          <ContentText className={cn(pt64, pb64)}>
            <Molecule>
              <h1 className={cn('font-h1', pb32)}>{title}</h1>
              <p className={cn('font-p-large')}>{description}</p>
            </Molecule>
          </ContentText>
        </Grid>
        <Grid lg={6} md={8} sm={12} xs={12}>
          <Container justify={'center'}>
            <Toggle
              className={cn(pb32, pr24)}
              onClick={handleToggle}
              enabled={togglePricing}
              text={{ textEnable: 'Self-hosted', textDisable: 'Cloud' }}
            />
          </Container>

          {togglePricing ? (
            <PricingBlock tiers={saas} />
          ) : (
            <PricingBlock tiers={opensource} />
          )}
          <Container justify={'center'} alignItems={'end'}>
            <p className={cn('font-p-small')}>
              * Fair use of database storage for identities, flows and sessions.
              Upgrades are possible.
            </p>
            <p className={cn('font-p-small')}>
              Prices in USD, taxes may apply. Billed monthly.
            </p>
          </Container>
        </Grid>
      </Container>
    </div>
  )
}

export default Pricing
