import React, { FC, useEffect, useState } from 'react'
import { ApiClient, ActionProps, RecordJSON, ActionButton, useResource } from 'adminjs'
import {
  Box,
  Label,
  Button,
  Icon,
  Section,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  formatCurrencyProperty,
} from '@adminjs/design-system'

type getInvoices = (id: string | undefined) => void

type InvoicesProps = ActionProps & { where: string }

const Invoices: FC<InvoicesProps> = props => {
  const { record, where } = props
  const [invoices, setInvoices] = useState<RecordJSON[]>([])
  const InvoiceResource = useResource('Invoice')
  const NewInvoiceAction = InvoiceResource?.actions.find(action => action.name === 'new')!
  const api = new ApiClient()

  const getInvoices: getInvoices = async id => {
    const response = await api.resourceAction({
      resourceId: 'Invoice',
      actionName: 'search',
      params: { 'filters.customerId': id },
    })
    if (response.status !== 200) {
      console.error('Wystąpił bład')
    }
    setInvoices(response.data.records)
  }

  useEffect(() => {
    getInvoices(record?.params.id)
  }, [])

  const ActionIcon = { show: 'Eye', edit: 'Edit2', delete: 'Trash2' }

  return (
    <Box width={1} mb="xl">
      {!!invoices.length && (
        <>
          <Label> Invoices </Label>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Due date</TableCell>
                <TableCell>Value</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map(record => (
                <TableRow key={record.id}>
                  <TableCell>{record.params.invoiceNo}</TableCell>
                  <TableCell>{record.params.invoiceDate}</TableCell>
                  <TableCell>{record.params.dueDate}</TableCell>
                  <TableCell>
                    {formatCurrencyProperty({ value: record.params.invoiceValue, decimalScale: 2 })}
                  </TableCell>
                  <TableCell>{formatCurrencyProperty({ value: record.params.paid, decimalScale: 2 })}</TableCell>
                  <TableCell>
                    {record.recordActions.map(action => (
                      <ActionButton
                        key={action.name}
                        action={action}
                        resourceId={action.resourceId}
                        recordId={record.id}
                      >
                        <Button size="icon" rounded color={action.variant}>
                          <Icon icon={ActionIcon[action.name]} />
                        </Button>
                      </ActionButton>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
      {where === 'edit' && (
        <Box p="xl">
          <ActionButton action={NewInvoiceAction} resourceId="Invoice">
            <Button variant="outlined">
              <Icon icon="Plus" />
              Add new invoice
            </Button>
          </ActionButton>
        </Box>
      )}
    </Box>
  )
}
export default Invoices
