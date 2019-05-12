Feature: As a professor
         I want to delete one student
         So that I can manage the students list

Scenario: Delete only the student with the given cpf
Given I am at the students page
Given The student "José" with CPF "1010" is registered in the students list
Given The student "Paulo" with CPF "683" is registered in the students list
When I try to delete the student "Paulo" with CPF "683"
Then I cannot see "Paulo" with CPF "683" in the students list anymore
Then I can see "José" with CPF "1010" in the students list