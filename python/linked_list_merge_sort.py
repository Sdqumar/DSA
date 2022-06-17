from tarfile import LENGTH_LINK
from linked_list import LinkedList

def merge_sort(linked_list):
    """
    Sorts a linked list in ascending order
    - Recursively dividethe linked lost into sublist containing sigle node
    - Repeatedly merge the sublist to produce sorted sublist untill one remains
    """

    if linked_list.size() == 1:
        return linked_list
    elif linked_list.head is None:
        return linked_list

    left_half, right_half = split(linked_list)
    left = merge_sort(left_half)
    right = merge_sort(right_half)

    return merge(left,right)

def split(linked_list):
    """
    Divide the unsorted at midpoint into sublists
    """

    if linked_list == None or linked_list.head == None:
        left_half = linked_list
        right_half = None

        return left_half,right_half
    else:
        size = linked_list.size()
        mid = size//2

        mid_node = LENGTH_LINK.node_at_index(mid-1)

        left_half = linked_list
        right_half = LinkedList()
        right_half.head = mid_node.next_node
        mid_node.next_node = None

        return left_half,right_half


def merge(left,right):
    """
    Merges two linked list, sorting by data in nodes
    Returns a new, merge list
    """

    # Create a new linked list that contains node from
    # mergeing left and right

    merged = LinkedList()

    # Add a fake head thatis discarded later

    merged.add(0)

    # Set current to the head of the linked list
    current = merged.head

    # Obtain head nodes for left and right linked list
    left_head = left.head
    right_head = right.head


    # iterate over left and right untill we reach the tail node
    # Add the node from right to merge linked list

    if left_head is None:
        current.next_node = right_head
        # Call next on right to set loop condition to False
        right_head = right_head.next_node
    # If the head node of right is None, we're past the tail
    # Add the tail node from left to merged linked list
    elif right_head is None:
        current.next_node = left_head
        # call next on left to set loop condition to False
        left_head = left_head.next_node
    else:
        # Not at either tail node
        # Obtain node data to perform comparsion oprations
        left_head = left_head.data
        right_head = right_head.data
        # if data on left is less than right, set current to left node
        if left_head < right_head:
            current.next_node = left_head 
            # Move left head to next node
            left_head = left_head.next_node
        # If data on left is greater than right, set current to right node
        else:
            current.next_node -right_head
            # Move right head to next node
            right_head = right_head.next_node

    #Move current to next node
    current = current.next_node
    
