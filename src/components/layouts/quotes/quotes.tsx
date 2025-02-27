import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import { pb32, pb16 } from '../../freestanding/utils/padding.module.css'
import * as styles from './quote.module.css'

export interface PropTypes {
  id: string
  quotes: Array<Quote>
}

interface QuoteColumn {
  quotes: Array<Quote>
}

interface Quote {
  big?: boolean
  description: React.ReactElement
  person: string
  jobTitle: string
  className?: string
}

const Quote = () => <i className={'ph-quotes-fill text-primary size32'} />
const QuoteThemed = () => (
  <i className={'ph-quotes-fill themed-primary size32'} />
)

const QuoteBlock = ({
  className,
  big,
  description,
  person,
  jobTitle
}: Quote) => (
  <Container>
    <Grid
      lg={12}
      md={12}
      sm={12}
      xs={12}
      className={cn(className && className)}
    >
      {!big ? (
        <div>
          <div className={cn(pb16)}>
            <Quote />
          </div>
          <h4 className={cn('font-quote', pb16)}>{description}</h4>
        </div>
      ) : (
        <div>
          <div className={cn(pb16)}>
            <QuoteThemed />
          </div>
          <h2 className={cn('font-h2', pb32)}>{description}</h2>
        </div>
      )}
      <p className={cn('font-p-small')}>
        <span
          className={cn(!big ? 'is-semibold' : 'is-semibold is-themed-primary')}
        >
          {person}{' '}
        </span>
        // {jobTitle}
      </p>
    </Grid>
  </Container>
)

const QuoteColumn = ({ quotes, big }: QuoteColumn & { big: boolean }) => (
  <Grid lg={big ? 5 : 6} md={12} sm={12} xs={12} xsHidden={!big}>
    <Container alignItems={'start'} justify={'start'}>
      {quotes
        .filter((quote) => !!quote.big === big)
        .map((quote, index) => (
          <Grid
            lg={12}
            md={big ? 12 : 6}
            sm={12}
            xs={12}
            className={cn(styles.quoteBlock)}
            key={index}
          >
            <Container flexContainer={'row'} alignItems={'start'}>
              <QuoteBlock
                big={quote.big}
                description={quote.description}
                person={quote.person}
                jobTitle={quote.jobTitle}
                key={index}
              />
            </Container>
          </Grid>
        ))}
    </Container>
  </Grid>
)

const Quotes = ({ id, quotes }: PropTypes) => (
  <div id={id} className={cn(styles.quote, 'background-is-dark')}>
    <Container fluid={true}>
      <QuoteColumn quotes={quotes} big={true} />
      <QuoteColumn quotes={quotes} big={false} />
    </Container>
  </div>
)

export default Quotes
