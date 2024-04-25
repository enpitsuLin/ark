import { defineComponent } from 'vue'
import { type HTMLArkProps, ark } from '../factory'
import { usePresenceContext } from '../presence'
import { useDatePickerContext } from './use-date-picker-context'

export interface DatePickerPositionerProps extends HTMLArkProps<'div'> {}

export const DatePickerPositioner = defineComponent<DatePickerPositionerProps>(
  (_, { attrs, slots }) => {
    const api = useDatePickerContext()
    const presenceApi = usePresenceContext()

    return () =>
      presenceApi.value.unmounted ? null : (
        <ark.div {...api.value.positionerProps} {...attrs}>
          {slots.default?.()}
        </ark.div>
      )
  },
  {
    name: 'DatePickerPositioner',
  },
)