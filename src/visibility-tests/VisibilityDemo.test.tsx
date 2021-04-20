import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VisibilityDemo from './VisibilityDemo';

describe( 'Visibility tests', () => {
  let queries: RenderResult;

  beforeEach( () => {
    queries = render( <VisibilityDemo /> );
  } );

  test( 'Toggle DOM absence', () => {
    const button = queries.getByText( 'Toggle DOM' );
    const box = queries.queryByTestId( 'DOM' );
    // Verify that the box is in the DOM
    expect( box ).toBeInTheDocument();

    fireEvent.click( button );
    expect( box ).not.toBeInTheDocument();
  } );

  test( 'Toggle Visibility', () => {
    const button = queries.getByText( 'Toggle Visibility' );
    const box = queries.queryByTestId( 'visibility' );
    // Verify that the box is in the DOM
    expect( box ).toBeInTheDocument();
    expect( box ).toBeVisible();

    fireEvent.click( button );
    expect( box ).toBeInTheDocument();
    expect( box ).not.toBeVisible();
  } );

  test( 'Toggle Display', () => {
    const button = queries.getByText( 'Toggle Display' );
    const box = queries.queryByTestId( 'display' );
    // Verify that the box is in the DOM
    expect( box ).toBeInTheDocument();
    expect( box ).toBeVisible();

    fireEvent.click( button );
    expect( box ).toBeInTheDocument();
    expect( box ).not.toBeVisible();
  } );

  test( 'Toggle Opacity', () => {
    const button = queries.getByText( 'Toggle Opacity' );
    const box = queries.queryByTestId( 'opacity' );
    // Verify that the box is in the DOM
    expect( box ).toBeInTheDocument();
    expect( box ).toBeVisible();

    fireEvent.click( button );
    expect( box ).toBeInTheDocument();
    expect( box ).not.toBeVisible();
  } );

  test( 'Toggle Hidden', () => {
    const button = queries.getByText( 'Toggle Hidden' );
    const box = queries.queryByTestId( 'hidden' );
    // Verify that the box is in the DOM
    expect( box ).toBeInTheDocument();
    expect( box ).toBeVisible();

    fireEvent.click( button );
    expect( box ).toBeInTheDocument();
    expect( box ).not.toBeVisible();
  } );
} );
