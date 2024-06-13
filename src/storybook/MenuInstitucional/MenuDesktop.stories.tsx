import type {Meta, StoryObj} from '@storybook/react';
import MenuInstitucionalDeskTop from '../../components/ui/header/menuInstitucional/desktop';

const meta: Meta<typeof MenuInstitucionalDeskTop> = {
  title: 'Actions/Header/MenuInstitucional/Menu Institucional Desktop',
  component: MenuInstitucionalDeskTop,
  tags: ['autodocs'],
}

export default  meta;
type Story = StoryObj<typeof MenuInstitucionalDeskTop>

export const Component: Story = {
  render: (args) => <div style={{
    display:'flex',
    justifyContent:'space-between',
    backgroundColor: '#313131',
  }}>
    <MenuInstitucionalDeskTop/>
  </div>
}
