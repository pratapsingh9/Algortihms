class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def print_list(self):
        current = self.head
        while current:
            print(current.data)
            current = current.next

    def reverseList(self):
        prev = None
        current = self.head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head = prev

    def middle_element(self):
        if not self.head:
            return None
        slow = fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow.data

    def deleteNodeAtGivenPosition(self, position):
        # Check if the list is empty
        if self.head is None:
            print("Nothing in the list")
            return

        index = 0
        current = self.head

        # Handle the case when the position is 0 (delete the head node)
        if position == 0:
            self.head = self.head.next
            return

        # Traverse the list to reach the node before the position
        while current.next and index < position - 1:
            current = current.next
            index += 1

        # If position is out of range
        if index != position - 1 or current.next is None:
            print("Position out of range")
            return

        # Skip over the node to be deleted
        current.next = current.next.next

    def deleteNodewithoutHead(self,node_to_deleted):
        if node_to_deleted == self.head:
            print("cannot delte head")
            return
        current = self.head
        while current.next:
            if current.next == node_to_deleted:
                current.next = current.next.next
                node_to_deleted.next = None
                break
            else:
                print("Node Not founded int The list")

    def nodeDeletion(self, key):
        if not self.head:
            print("List is Empty")
            return

        # Handle the case when the head node needs to be deleted
        if self.head.data == key:
            self.head = self.head.next
            return

        current = self.head
        while current.next is not None:
            if current.next.data == key:
                current.next = current.next.next
                break  # Exit the loop after deleting the node
            current = current.next
        else:
            print(f"Key {key} not found in the list")

# Creating a linked list
linked_list = LinkedList()
linked_list.append(10)
linked_list.append(20)
linked_list.append(30)
linked_list.append(40)
linked_list.append(50)

print("Original List:")
linked_list.print_list()

print("\nMiddle Element:", linked_list.middle_element())

print("\nReversed List:")
linked_list.reverseList()
linked_list.print_list()

linked_list.nodeDeletion(20)
print("\nList after deleting 20:")
linked_list.print_list()

linked_list.deleteNodeAtGivenPosition(2)
print("\nAfter deleting node at position 2:")
nodetodelte = linked_list.head.next
linked_list.deleteNodewithoutHead(nodetodelte)
linked_list.print_list()