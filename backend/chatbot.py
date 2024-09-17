# from openai import OpenAI

# client = OpenAI(api_key='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')


# # ^^^^^ INSERT OPENAI KEY

# # Data 
# club_data = {
#     "about_us": "Our club was founded by a group of students at the University of Minnesota who had a passion for Artificial Intelligence and creative problem solving. The AI Innovator Society is striving to learn more and solve problems they find in the community today.",
#     "mission": "The Artificial Intelligence Innovator Society strives to utilize AI technologies and methodologies to solve problems in our community. We aim to make the most out of AI's potential.",
#     "projects": "Members collaborate on innovative AI projects that tackle real-world problems. These projects provide hands-on experience with key technologies. Whether you're building your portfolio or exploring new AI applications, our projects are a perfect way to put your skills into action.",
#     "events": "We host exciting events like hackathons and entrepreneurial competitions to push innovation to the next level! Our hackathons give students a chance to solve real-world challenges using AI. We also plan to host an entrepreneurial event to help students turn AI-driven ideas into startup ventures.",
#     "workshops": "AIIS offers workshops designed to build essential skills in AI. Led by experienced peers, our workshops cater to all skill levels, providing hands-on learning to deepen understanding of AI technologies.",
#     "field_trips": "We plan field trips to take learning beyond the classroom. Real-world data, innovative projects, and hands-on experiences help you boost your AI skills in a fun, dynamic way.",
#     "experience": "You don't need any experience in AI to join the club. A basic understanding of Python is helpful but not required.",
#     "meetings": "Meetings will take place on Thursdays at 5:00 PM at ...",
#     "membership": "To become an official member, you need to attend a minimum of three club meetings.",
#     "communication": "Our main form of communication is through Instagram. Feel free to message us there!",
#     "board_membership": "Board member applications open at the end of each school year.",
#     "upcoming_events": "Our upcoming event is the Open House. The time is TBD. Stay tuned for more details!",
#     "president": "The president of the AI Innovator Society is Darsh Garg.",
#     "vice_president": "The vice president of the AI Innovator Society is Danny Kaddoura.",
#     "operations_head": "The head of operations is Srithan Seetnesamy.",
#     "tech_head": "The head of technology is Parees Pradhan.",
#     "finance_head": "The head of finance is Sash Anand.",
#     "project_manager": "The project manager is Rohan M. Dham.",
#     "advisors": "Our advisors are David Nguyen and Drew Russeth."
# }

# def generate_club_prompt(user_input):
#     """
#     Generates a prompt that incorporates the club's information and the user's input to guide the AI response.
#     """
#     club_info = f"""
#     AI Innovator Society Information:
#     {club_data['about_us']}
#     {club_data['mission']}
#     Projects: {club_data['projects']}
#     Events: {club_data['events']}
#     Workshops: {club_data['workshops']}
#     Field Trips: {club_data['field_trips']}
#     Experience: {club_data['experience']}
#     Meetings: {club_data['meetings']}
#     Membership: {club_data['membership']}
#     Communication: {club_data['communication']}
#     Board Membership: {club_data['board_membership']}
#     Upcoming Events: {club_data['upcoming_events']}
#     President: {club_data['president']}
#     Vice President: {club_data['vice_president']}
#     Head of Operations: {club_data['operations_head']}
#     Head of Technology: {club_data['tech_head']}
#     Head of Finance: {club_data['finance_head']}
#     Project Manager: {club_data['project_manager']}
#     Advisors: {club_data['advisors']}
#     """

#     prompt = f"""{club_info}

#     User Query: {user_input}
    
#     Chatbot Response:"""

#     return prompt

# def get_ai_response(prompt):
#     """
#     Sends the prompt to OpenAI's GPT model and returns the AI's response.
#     """
#     response = client.completions.create(engine="text-davinci-003",  
#     prompt=prompt,
#     max_tokens=150,  
#     temperature=1,  
#     n=1)

#     return response.choices[0].text.strip()

# # main
# def ai_innovator_chatbot():
#     print("Welcome to the AI Innovator Society ChatBot! Ask me anything about the club.")


#     while True:
#         user_input = input("You: ").lower()
#         if "exit" in user_input or "bye" in user_input:
#             print("ChatBot: Goodbye! Feel free to reach out again.")
#             break

#         prompt = generate_club_prompt(user_input)
#         response = get_ai_response(prompt)
#         print(f"ChatBot: {response}")

# ai_innovator_chatbot()
