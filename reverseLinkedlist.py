def reverse_linkedlist(head):
    result = None
    while head:
        temp = head.next
        head.next = result
        result = head
        head = temp
    return result
