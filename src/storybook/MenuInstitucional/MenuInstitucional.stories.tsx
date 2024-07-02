import type {Meta, StoryObj} from '@storybook/react';
import MenuInstitucionalMobile from "@/components/ui/header/menuInstitucional/mobile";


const meta: Meta<typeof MenuInstitucionalMobile> = {
  title: 'Actions/Header/MenuInstitucional/Menu Institucional Mobile',
  component: MenuInstitucionalMobile,
  tags: ['autodocs'],
}

export default  meta;
type Story = StoryObj<typeof MenuInstitucionalMobile>

export const Component: Story = {
  render: (args) => <div style={{
    display: 'inline-flex',
    backgroundColor: '#313131',
    padding: 24
  }}>
    <MenuInstitucionalMobile/>
  </div>
}
