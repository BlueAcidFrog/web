import cn from 'classnames'
import React from 'react'

import { projects } from '../../../config'
import Button from '../../freestanding/button/button'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'

import {
  pb16,
  pb48,
  pb64,
  pb8,
  pt24,
  pt32
} from '../../freestanding/utils/padding.module.css'
import { features, featuresContent } from './projects.module.css'

export interface PropTypes {
  id: string
  overline: string
  title: React.ReactElement
  description?: React.ReactElement
  buttons?: React.ReactNode
}

const Projects = ({ id, overline, title, description, buttons }: PropTypes) => {
  const ArrowRight = (
    <i className={'ph-arrow-right-bold theme-primary size16'} />
  )

  return (
    <div id={id} className={cn(features)}>
      <Container fluid={true} alignItems={'start'}>
        <Grid lg={5} md={12} sm={12} xs={12} className={cn(pb64)}>
          <ContentText>
            <Molecule>
              <h3 className={cn('font-overline', pb16)}>{overline}</h3>
              <h1 className={cn('font-h3')}>{title}</h1>
              {description && (
                <p className={cn('font-p', pt32)}>{description}</p>
              )}
            </Molecule>
            <MoleculeInteraction className={cn(pt24)}>
              {buttons}
            </MoleculeInteraction>
          </ContentText>
        </Grid>
        <Grid lg={6} md={12} sm={12} xs={12}>
          <Container alignItems={'start'} justify={'start'}>
            {projects.map((project, index) => (
              <Grid
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={cn(pb48, featuresContent, `theme-${project.id}`)}
                key={index}
              >
                <Container
                  key={index}
                  className={cn(pb48, featuresContent)}
                  flexContainer={'row'}
                  alignItems={'start'}
                >
                  <ColourWrapper className={cn(pb8)} text={'themed-primary'}>
                    {project.icon}
                  </ColourWrapper>
                  <ContentText>
                    <h3 className={cn('font-overline', pb16)}>
                      {project.descriptiveTitle}
                    </h3>
                    <h2 className={cn('font-h5', 'is-themed-primary', pb8)}>
                      {project.title}
                    </h2>
                    <p className={cn('font-p-small', pb8)}>
                      {project.description}
                    </p>
                    <Button
                      to={project.path}
                      style={'link'}
                      iconRight={ArrowRight}
                    >
                      Explore {project.title}
                    </Button>
                  </ContentText>
                </Container>
              </Grid>
            ))}
          </Container>
        </Grid>
      </Container>
    </div>
  )
}

export default Projects
