import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module).add('Default', () => (
    <div style={{ fontFamily: 'Verdana' }}>
        <h3 style={{ backgroundColor: 'maroon', color: 'white', padding: '.5rem 1rem' }}>Default</h3>
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Default Button</h4>
                <Button>Default Button</Button>
            </div>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Default Button With Loading</h4>
                <Button isLoading>Default Button</Button>
            </div>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Default Button Small</h4>
                <Button size='small'>Default Button Small</Button>
            </div>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Default Button Medium (Default)</h4>
                <Button size='medium'>Default Button Medium</Button>
            </div>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Default Button Large</h4>
                <Button size='large'>Default Button Large</Button>
            </div>
        </div>


    </div>
));

storiesOf('Button', module).add('Primary', () => (
    <div style={{ fontFamily: 'Verdana' }}>

        <h3 style={{ backgroundColor: 'maroon', color: 'white', padding: '.5rem 1rem' }}>Primary</h3>
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Primary Button</h4>
                <Button theme='primary'>Primary Button</Button>
            </div>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Primary Button With Loading</h4>
                <Button theme='primary' isLoading>Primary Button</Button>
            </div>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Default Button Small</h4>
                <Button theme='primary' size='small'>Primary Button Small</Button>
            </div>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Default Button Medium (Default)</h4>
                <Button theme='primary' size='medium'>Primary Button Medium</Button>
            </div>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Default Button Large</h4>
                <Button theme='primary' size='large'>Primary Button Large</Button>
            </div>
        </div>
    </div>
))
storiesOf('Button', module).add('Secondary', () => (
    <div style={{ fontFamily: 'Verdana' }}>

        <h3 style={{ backgroundColor: 'maroon', color: 'white', padding: '.5rem 1rem' }}>Secondary</h3>
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Secondary Button</h4>
                <Button theme='secondary'>Secondary Button</Button>
            </div>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Secondary Button With Loading</h4>
                <Button theme='secondary' isLoading>Secondary Button</Button>
            </div>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Secondary Button Small</h4>
                <Button theme='secondary' size='small'>Secondary Button Small</Button>
            </div>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Secondary Button Medium (Default)</h4>
                <Button theme='secondary' size='medium'>Secondary Button Medium</Button>
            </div>
            <div style={{ marginRight: 16, backgroundColor: '#eee', textAlign: 'center', padding: '1rem' }}>
                <h4>Secondary Button Large</h4>
                <Button theme='secondary' size='large'>Secondary Button Large</Button>
            </div>
        </div>
    </div>
))
