/*=================== INTERFACES ===============*/

interface ScreenProp {
  navigation: {
    goBack: () => void
    push: (routeName: string, params?: any) => void
    getParam: (paramName: string, defaultValue?: any) => any
    navigate: (routeName: string, params?: any) => void
    replace: (routeName: string, params?: any) => void
    state: {
      routeName: string
      key: string
      params: any
    }
  }
}

interface ComponentProp {
  children: any
}

interface ButtonProp {
  onPress: function
  width?: number
  height?: number
  text?: string
  icon?: number
  color?: string
  borderRadius?: number
  borderColor?: string
  textColor?: string
  fontSize?: number
  fontType?: string
  disabled?: boolean
}
