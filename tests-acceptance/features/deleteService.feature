Feature: As a professor
         I want to delete one student
         So that I can manage the students list

Scenario: Delete a student with the given cpf

Given The student "Paulo" with CPF "683" is registered in the system
When I delete the student "Paulo" with CPF "683"
Then the student "Paulo" with CPF "683" is not in the system anymore

Scenario: Try to delete a student with a cpf that is not in the system

Given The student "Paulo" with CPF "683" is registered in the system
When I try to delete the student "Paulo" with CPF "555"
Then the student "Paulo" with CPF "683" is still in the system