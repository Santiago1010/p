var DataTypes = require("sequelize").DataTypes;
var _mdl_analytics_indicator_calc = require("./mdl_analytics_indicator_calc");
var _mdl_analytics_models = require("./mdl_analytics_models");
var _mdl_analytics_models_log = require("./mdl_analytics_models_log");
var _mdl_analytics_predict_samples = require("./mdl_analytics_predict_samples");
var _mdl_analytics_prediction_actions = require("./mdl_analytics_prediction_actions");
var _mdl_analytics_predictions = require("./mdl_analytics_predictions");
var _mdl_analytics_train_samples = require("./mdl_analytics_train_samples");
var _mdl_analytics_used_analysables = require("./mdl_analytics_used_analysables");
var _mdl_analytics_used_files = require("./mdl_analytics_used_files");
var _mdl_assign = require("./mdl_assign");
var _mdl_assign_grades = require("./mdl_assign_grades");
var _mdl_assign_overrides = require("./mdl_assign_overrides");
var _mdl_assign_plugin_config = require("./mdl_assign_plugin_config");
var _mdl_assign_submission = require("./mdl_assign_submission");
var _mdl_assign_user_flags = require("./mdl_assign_user_flags");
var _mdl_assign_user_mapping = require("./mdl_assign_user_mapping");
var _mdl_assignfeedback_comments = require("./mdl_assignfeedback_comments");
var _mdl_assignfeedback_editpdf_annot = require("./mdl_assignfeedback_editpdf_annot");
var _mdl_assignfeedback_editpdf_cmnt = require("./mdl_assignfeedback_editpdf_cmnt");
var _mdl_assignfeedback_editpdf_queue = require("./mdl_assignfeedback_editpdf_queue");
var _mdl_assignfeedback_editpdf_quick = require("./mdl_assignfeedback_editpdf_quick");
var _mdl_assignfeedback_editpdf_rot = require("./mdl_assignfeedback_editpdf_rot");
var _mdl_assignfeedback_file = require("./mdl_assignfeedback_file");
var _mdl_assignment = require("./mdl_assignment");
var _mdl_assignment_submissions = require("./mdl_assignment_submissions");
var _mdl_assignment_upgrade = require("./mdl_assignment_upgrade");
var _mdl_assignsubmission_file = require("./mdl_assignsubmission_file");
var _mdl_assignsubmission_onlinetext = require("./mdl_assignsubmission_onlinetext");
var _mdl_auth_oauth2_linked_login = require("./mdl_auth_oauth2_linked_login");
var _mdl_backup_controllers = require("./mdl_backup_controllers");
var _mdl_backup_courses = require("./mdl_backup_courses");
var _mdl_backup_logs = require("./mdl_backup_logs");
var _mdl_badge = require("./mdl_badge");
var _mdl_badge_alignment = require("./mdl_badge_alignment");
var _mdl_badge_backpack = require("./mdl_badge_backpack");
var _mdl_badge_criteria = require("./mdl_badge_criteria");
var _mdl_badge_criteria_met = require("./mdl_badge_criteria_met");
var _mdl_badge_criteria_param = require("./mdl_badge_criteria_param");
var _mdl_badge_endorsement = require("./mdl_badge_endorsement");
var _mdl_badge_external = require("./mdl_badge_external");
var _mdl_badge_external_backpack = require("./mdl_badge_external_backpack");
var _mdl_badge_external_identifier = require("./mdl_badge_external_identifier");
var _mdl_badge_issued = require("./mdl_badge_issued");
var _mdl_badge_manual_award = require("./mdl_badge_manual_award");
var _mdl_badge_related = require("./mdl_badge_related");
var _mdl_bigbluebuttonbn = require("./mdl_bigbluebuttonbn");
var _mdl_bigbluebuttonbn_logs = require("./mdl_bigbluebuttonbn_logs");
var _mdl_block = require("./mdl_block");
var _mdl_block_instances = require("./mdl_block_instances");
var _mdl_block_positions = require("./mdl_block_positions");
var _mdl_block_recent_activity = require("./mdl_block_recent_activity");
var _mdl_block_recentlyaccesseditems = require("./mdl_block_recentlyaccesseditems");
var _mdl_block_rss_client = require("./mdl_block_rss_client");
var _mdl_block_xp = require("./mdl_block_xp");
var _mdl_block_xp_config = require("./mdl_block_xp_config");
var _mdl_block_xp_filters = require("./mdl_block_xp_filters");
var _mdl_block_xp_log = require("./mdl_block_xp_log");
var _mdl_blog_association = require("./mdl_blog_association");
var _mdl_blog_external = require("./mdl_blog_external");
var _mdl_book = require("./mdl_book");
var _mdl_book_chapters = require("./mdl_book_chapters");
var _mdl_cache_filters = require("./mdl_cache_filters");
var _mdl_cache_flags = require("./mdl_cache_flags");
var _mdl_capabilities = require("./mdl_capabilities");
var _mdl_chat = require("./mdl_chat");
var _mdl_chat_messages = require("./mdl_chat_messages");
var _mdl_chat_messages_current = require("./mdl_chat_messages_current");
var _mdl_chat_users = require("./mdl_chat_users");
var _mdl_choice = require("./mdl_choice");
var _mdl_choice_answers = require("./mdl_choice_answers");
var _mdl_choice_options = require("./mdl_choice_options");
var _mdl_cohort = require("./mdl_cohort");
var _mdl_cohort_members = require("./mdl_cohort_members");
var _mdl_comments = require("./mdl_comments");
var _mdl_competency = require("./mdl_competency");
var _mdl_competency_coursecomp = require("./mdl_competency_coursecomp");
var _mdl_competency_coursecompsetting = require("./mdl_competency_coursecompsetting");
var _mdl_competency_evidence = require("./mdl_competency_evidence");
var _mdl_competency_framework = require("./mdl_competency_framework");
var _mdl_competency_modulecomp = require("./mdl_competency_modulecomp");
var _mdl_competency_plan = require("./mdl_competency_plan");
var _mdl_competency_plancomp = require("./mdl_competency_plancomp");
var _mdl_competency_relatedcomp = require("./mdl_competency_relatedcomp");
var _mdl_competency_template = require("./mdl_competency_template");
var _mdl_competency_templatecohort = require("./mdl_competency_templatecohort");
var _mdl_competency_templatecomp = require("./mdl_competency_templatecomp");
var _mdl_competency_usercomp = require("./mdl_competency_usercomp");
var _mdl_competency_usercompcourse = require("./mdl_competency_usercompcourse");
var _mdl_competency_usercompplan = require("./mdl_competency_usercompplan");
var _mdl_competency_userevidence = require("./mdl_competency_userevidence");
var _mdl_competency_userevidencecomp = require("./mdl_competency_userevidencecomp");
var _mdl_config = require("./mdl_config");
var _mdl_config_log = require("./mdl_config_log");
var _mdl_config_plugins = require("./mdl_config_plugins");
var _mdl_context = require("./mdl_context");
var _mdl_context_temp = require("./mdl_context_temp");
var _mdl_course = require("./mdl_course");
var _mdl_course_categories = require("./mdl_course_categories");
var _mdl_course_completion_aggr_methd = require("./mdl_course_completion_aggr_methd");
var _mdl_course_completion_crit_compl = require("./mdl_course_completion_crit_compl");
var _mdl_course_completion_criteria = require("./mdl_course_completion_criteria");
var _mdl_course_completion_defaults = require("./mdl_course_completion_defaults");
var _mdl_course_completions = require("./mdl_course_completions");
var _mdl_course_format_options = require("./mdl_course_format_options");
var _mdl_course_modules = require("./mdl_course_modules");
var _mdl_course_modules_completion = require("./mdl_course_modules_completion");
var _mdl_course_published = require("./mdl_course_published");
var _mdl_course_request = require("./mdl_course_request");
var _mdl_course_sections = require("./mdl_course_sections");
var _mdl_customfield_category = require("./mdl_customfield_category");
var _mdl_customfield_data = require("./mdl_customfield_data");
var _mdl_customfield_field = require("./mdl_customfield_field");
var _mdl_data = require("./mdl_data");
var _mdl_data_content = require("./mdl_data_content");
var _mdl_data_fields = require("./mdl_data_fields");
var _mdl_data_records = require("./mdl_data_records");
var _mdl_editor_atto_autosave = require("./mdl_editor_atto_autosave");
var _mdl_enrol = require("./mdl_enrol");
var _mdl_enrol_flatfile = require("./mdl_enrol_flatfile");
var _mdl_enrol_lti_lti2_consumer = require("./mdl_enrol_lti_lti2_consumer");
var _mdl_enrol_lti_lti2_context = require("./mdl_enrol_lti_lti2_context");
var _mdl_enrol_lti_lti2_nonce = require("./mdl_enrol_lti_lti2_nonce");
var _mdl_enrol_lti_lti2_resource_link = require("./mdl_enrol_lti_lti2_resource_link");
var _mdl_enrol_lti_lti2_share_key = require("./mdl_enrol_lti_lti2_share_key");
var _mdl_enrol_lti_lti2_tool_proxy = require("./mdl_enrol_lti_lti2_tool_proxy");
var _mdl_enrol_lti_lti2_user_result = require("./mdl_enrol_lti_lti2_user_result");
var _mdl_enrol_lti_tool_consumer_map = require("./mdl_enrol_lti_tool_consumer_map");
var _mdl_enrol_lti_tools = require("./mdl_enrol_lti_tools");
var _mdl_enrol_lti_users = require("./mdl_enrol_lti_users");
var _mdl_enrol_paypal = require("./mdl_enrol_paypal");
var _mdl_event = require("./mdl_event");
var _mdl_event_subscriptions = require("./mdl_event_subscriptions");
var _mdl_events_handlers = require("./mdl_events_handlers");
var _mdl_events_queue = require("./mdl_events_queue");
var _mdl_events_queue_handlers = require("./mdl_events_queue_handlers");
var _mdl_external_functions = require("./mdl_external_functions");
var _mdl_external_services = require("./mdl_external_services");
var _mdl_external_services_functions = require("./mdl_external_services_functions");
var _mdl_external_services_users = require("./mdl_external_services_users");
var _mdl_external_tokens = require("./mdl_external_tokens");
var _mdl_favourite = require("./mdl_favourite");
var _mdl_feedback = require("./mdl_feedback");
var _mdl_feedback_completed = require("./mdl_feedback_completed");
var _mdl_feedback_completedtmp = require("./mdl_feedback_completedtmp");
var _mdl_feedback_item = require("./mdl_feedback_item");
var _mdl_feedback_sitecourse_map = require("./mdl_feedback_sitecourse_map");
var _mdl_feedback_template = require("./mdl_feedback_template");
var _mdl_feedback_value = require("./mdl_feedback_value");
var _mdl_feedback_valuetmp = require("./mdl_feedback_valuetmp");
var _mdl_file_conversion = require("./mdl_file_conversion");
var _mdl_files = require("./mdl_files");
var _mdl_files_reference = require("./mdl_files_reference");
var _mdl_filter_active = require("./mdl_filter_active");
var _mdl_filter_config = require("./mdl_filter_config");
var _mdl_folder = require("./mdl_folder");
var _mdl_forum = require("./mdl_forum");
var _mdl_forum_digests = require("./mdl_forum_digests");
var _mdl_forum_discussion_subs = require("./mdl_forum_discussion_subs");
var _mdl_forum_discussions = require("./mdl_forum_discussions");
var _mdl_forum_grades = require("./mdl_forum_grades");
var _mdl_forum_posts = require("./mdl_forum_posts");
var _mdl_forum_queue = require("./mdl_forum_queue");
var _mdl_forum_read = require("./mdl_forum_read");
var _mdl_forum_subscriptions = require("./mdl_forum_subscriptions");
var _mdl_forum_track_prefs = require("./mdl_forum_track_prefs");
var _mdl_game = require("./mdl_game");
var _mdl_game_attempts = require("./mdl_game_attempts");
var _mdl_game_bookquiz = require("./mdl_game_bookquiz");
var _mdl_game_bookquiz_chapters = require("./mdl_game_bookquiz_chapters");
var _mdl_game_bookquiz_questions = require("./mdl_game_bookquiz_questions");
var _mdl_game_cross = require("./mdl_game_cross");
var _mdl_game_cryptex = require("./mdl_game_cryptex");
var _mdl_game_export_html = require("./mdl_game_export_html");
var _mdl_game_export_javame = require("./mdl_game_export_javame");
var _mdl_game_grades = require("./mdl_game_grades");
var _mdl_game_hangman = require("./mdl_game_hangman");
var _mdl_game_hiddenpicture = require("./mdl_game_hiddenpicture");
var _mdl_game_millionaire = require("./mdl_game_millionaire");
var _mdl_game_queries = require("./mdl_game_queries");
var _mdl_game_repetitions = require("./mdl_game_repetitions");
var _mdl_game_snakes = require("./mdl_game_snakes");
var _mdl_game_snakes_database = require("./mdl_game_snakes_database");
var _mdl_game_sudoku = require("./mdl_game_sudoku");
var _mdl_game_sudoku_database = require("./mdl_game_sudoku_database");
var _mdl_glossary = require("./mdl_glossary");
var _mdl_glossary_alias = require("./mdl_glossary_alias");
var _mdl_glossary_categories = require("./mdl_glossary_categories");
var _mdl_glossary_entries = require("./mdl_glossary_entries");
var _mdl_glossary_entries_categories = require("./mdl_glossary_entries_categories");
var _mdl_glossary_formats = require("./mdl_glossary_formats");
var _mdl_grade_categories = require("./mdl_grade_categories");
var _mdl_grade_categories_history = require("./mdl_grade_categories_history");
var _mdl_grade_grades = require("./mdl_grade_grades");
var _mdl_grade_grades_history = require("./mdl_grade_grades_history");
var _mdl_grade_import_newitem = require("./mdl_grade_import_newitem");
var _mdl_grade_import_values = require("./mdl_grade_import_values");
var _mdl_grade_items = require("./mdl_grade_items");
var _mdl_grade_items_history = require("./mdl_grade_items_history");
var _mdl_grade_letters = require("./mdl_grade_letters");
var _mdl_grade_outcomes = require("./mdl_grade_outcomes");
var _mdl_grade_outcomes_courses = require("./mdl_grade_outcomes_courses");
var _mdl_grade_outcomes_history = require("./mdl_grade_outcomes_history");
var _mdl_grade_settings = require("./mdl_grade_settings");
var _mdl_grading_areas = require("./mdl_grading_areas");
var _mdl_grading_definitions = require("./mdl_grading_definitions");
var _mdl_grading_instances = require("./mdl_grading_instances");
var _mdl_gradingform_guide_comments = require("./mdl_gradingform_guide_comments");
var _mdl_gradingform_guide_criteria = require("./mdl_gradingform_guide_criteria");
var _mdl_gradingform_guide_fillings = require("./mdl_gradingform_guide_fillings");
var _mdl_gradingform_rubric_criteria = require("./mdl_gradingform_rubric_criteria");
var _mdl_gradingform_rubric_fillings = require("./mdl_gradingform_rubric_fillings");
var _mdl_gradingform_rubric_levels = require("./mdl_gradingform_rubric_levels");
var _mdl_groupings = require("./mdl_groupings");
var _mdl_groupings_groups = require("./mdl_groupings_groups");
var _mdl_groups = require("./mdl_groups");
var _mdl_groups_members = require("./mdl_groups_members");
var _mdl_h5p = require("./mdl_h5p");
var _mdl_h5p_contents_libraries = require("./mdl_h5p_contents_libraries");
var _mdl_h5p_libraries = require("./mdl_h5p_libraries");
var _mdl_h5p_libraries_cachedassets = require("./mdl_h5p_libraries_cachedassets");
var _mdl_h5p_library_dependencies = require("./mdl_h5p_library_dependencies");
var _mdl_hvp = require("./mdl_hvp");
var _mdl_hvp_auth = require("./mdl_hvp_auth");
var _mdl_hvp_content_hub_cache = require("./mdl_hvp_content_hub_cache");
var _mdl_hvp_content_user_data = require("./mdl_hvp_content_user_data");
var _mdl_hvp_contents_libraries = require("./mdl_hvp_contents_libraries");
var _mdl_hvp_counters = require("./mdl_hvp_counters");
var _mdl_hvp_events = require("./mdl_hvp_events");
var _mdl_hvp_libraries = require("./mdl_hvp_libraries");
var _mdl_hvp_libraries_cachedassets = require("./mdl_hvp_libraries_cachedassets");
var _mdl_hvp_libraries_hub_cache = require("./mdl_hvp_libraries_hub_cache");
var _mdl_hvp_libraries_languages = require("./mdl_hvp_libraries_languages");
var _mdl_hvp_libraries_libraries = require("./mdl_hvp_libraries_libraries");
var _mdl_hvp_tmpfiles = require("./mdl_hvp_tmpfiles");
var _mdl_hvp_xapi_results = require("./mdl_hvp_xapi_results");
var _mdl_imscp = require("./mdl_imscp");
var _mdl_label = require("./mdl_label");
var _mdl_lesson = require("./mdl_lesson");
var _mdl_lesson_answers = require("./mdl_lesson_answers");
var _mdl_lesson_attempts = require("./mdl_lesson_attempts");
var _mdl_lesson_branch = require("./mdl_lesson_branch");
var _mdl_lesson_grades = require("./mdl_lesson_grades");
var _mdl_lesson_overrides = require("./mdl_lesson_overrides");
var _mdl_lesson_pages = require("./mdl_lesson_pages");
var _mdl_lesson_timer = require("./mdl_lesson_timer");
var _mdl_license = require("./mdl_license");
var _mdl_lock_db = require("./mdl_lock_db");
var _mdl_log = require("./mdl_log");
var _mdl_log_display = require("./mdl_log_display");
var _mdl_log_queries = require("./mdl_log_queries");
var _mdl_logstore_standard_log = require("./mdl_logstore_standard_log");
var _mdl_lti = require("./mdl_lti");
var _mdl_lti_access_tokens = require("./mdl_lti_access_tokens");
var _mdl_lti_submission = require("./mdl_lti_submission");
var _mdl_lti_tool_proxies = require("./mdl_lti_tool_proxies");
var _mdl_lti_tool_settings = require("./mdl_lti_tool_settings");
var _mdl_lti_types = require("./mdl_lti_types");
var _mdl_lti_types_config = require("./mdl_lti_types_config");
var _mdl_ltiservice_gradebookservices = require("./mdl_ltiservice_gradebookservices");
var _mdl_message = require("./mdl_message");
var _mdl_message_airnotifier_devices = require("./mdl_message_airnotifier_devices");
var _mdl_message_contact_requests = require("./mdl_message_contact_requests");
var _mdl_message_contacts = require("./mdl_message_contacts");
var _mdl_message_conversation_actions = require("./mdl_message_conversation_actions");
var _mdl_message_conversation_members = require("./mdl_message_conversation_members");
var _mdl_message_conversations = require("./mdl_message_conversations");
var _mdl_message_email_messages = require("./mdl_message_email_messages");
var _mdl_message_popup = require("./mdl_message_popup");
var _mdl_message_popup_notifications = require("./mdl_message_popup_notifications");
var _mdl_message_processors = require("./mdl_message_processors");
var _mdl_message_providers = require("./mdl_message_providers");
var _mdl_message_read = require("./mdl_message_read");
var _mdl_message_user_actions = require("./mdl_message_user_actions");
var _mdl_message_users_blocked = require("./mdl_message_users_blocked");
var _mdl_messageinbound_datakeys = require("./mdl_messageinbound_datakeys");
var _mdl_messageinbound_handlers = require("./mdl_messageinbound_handlers");
var _mdl_messageinbound_messagelist = require("./mdl_messageinbound_messagelist");
var _mdl_messages = require("./mdl_messages");
var _mdl_mnet_application = require("./mdl_mnet_application");
var _mdl_mnet_host = require("./mdl_mnet_host");
var _mdl_mnet_host2service = require("./mdl_mnet_host2service");
var _mdl_mnet_log = require("./mdl_mnet_log");
var _mdl_mnet_remote_rpc = require("./mdl_mnet_remote_rpc");
var _mdl_mnet_remote_service2rpc = require("./mdl_mnet_remote_service2rpc");
var _mdl_mnet_rpc = require("./mdl_mnet_rpc");
var _mdl_mnet_service = require("./mdl_mnet_service");
var _mdl_mnet_service2rpc = require("./mdl_mnet_service2rpc");
var _mdl_mnet_session = require("./mdl_mnet_session");
var _mdl_mnet_sso_access_control = require("./mdl_mnet_sso_access_control");
var _mdl_mnetservice_enrol_courses = require("./mdl_mnetservice_enrol_courses");
var _mdl_mnetservice_enrol_enrolments = require("./mdl_mnetservice_enrol_enrolments");
var _mdl_modules = require("./mdl_modules");
var _mdl_my_pages = require("./mdl_my_pages");
var _mdl_notifications = require("./mdl_notifications");
var _mdl_oauth2_access_token = require("./mdl_oauth2_access_token");
var _mdl_oauth2_endpoint = require("./mdl_oauth2_endpoint");
var _mdl_oauth2_issuer = require("./mdl_oauth2_issuer");
var _mdl_oauth2_system_account = require("./mdl_oauth2_system_account");
var _mdl_oauth2_user_field_mapping = require("./mdl_oauth2_user_field_mapping");
var _mdl_page = require("./mdl_page");
var _mdl_portfolio_instance = require("./mdl_portfolio_instance");
var _mdl_portfolio_instance_config = require("./mdl_portfolio_instance_config");
var _mdl_portfolio_instance_user = require("./mdl_portfolio_instance_user");
var _mdl_portfolio_log = require("./mdl_portfolio_log");
var _mdl_portfolio_mahara_queue = require("./mdl_portfolio_mahara_queue");
var _mdl_portfolio_tempdata = require("./mdl_portfolio_tempdata");
var _mdl_post = require("./mdl_post");
var _mdl_profiling = require("./mdl_profiling");
var _mdl_qtype_ddimageortext = require("./mdl_qtype_ddimageortext");
var _mdl_qtype_ddimageortext_drags = require("./mdl_qtype_ddimageortext_drags");
var _mdl_qtype_ddimageortext_drops = require("./mdl_qtype_ddimageortext_drops");
var _mdl_qtype_ddmarker = require("./mdl_qtype_ddmarker");
var _mdl_qtype_ddmarker_drags = require("./mdl_qtype_ddmarker_drags");
var _mdl_qtype_ddmarker_drops = require("./mdl_qtype_ddmarker_drops");
var _mdl_qtype_essay_options = require("./mdl_qtype_essay_options");
var _mdl_qtype_match_options = require("./mdl_qtype_match_options");
var _mdl_qtype_match_subquestions = require("./mdl_qtype_match_subquestions");
var _mdl_qtype_multichoice_options = require("./mdl_qtype_multichoice_options");
var _mdl_qtype_randomsamatch_options = require("./mdl_qtype_randomsamatch_options");
var _mdl_qtype_shortanswer_options = require("./mdl_qtype_shortanswer_options");
var _mdl_question = require("./mdl_question");
var _mdl_question_answers = require("./mdl_question_answers");
var _mdl_question_attempt_step_data = require("./mdl_question_attempt_step_data");
var _mdl_question_attempt_steps = require("./mdl_question_attempt_steps");
var _mdl_question_attempts = require("./mdl_question_attempts");
var _mdl_question_calculated = require("./mdl_question_calculated");
var _mdl_question_calculated_options = require("./mdl_question_calculated_options");
var _mdl_question_categories = require("./mdl_question_categories");
var _mdl_question_dataset_definitions = require("./mdl_question_dataset_definitions");
var _mdl_question_dataset_items = require("./mdl_question_dataset_items");
var _mdl_question_datasets = require("./mdl_question_datasets");
var _mdl_question_ddwtos = require("./mdl_question_ddwtos");
var _mdl_question_gapselect = require("./mdl_question_gapselect");
var _mdl_question_hints = require("./mdl_question_hints");
var _mdl_question_multianswer = require("./mdl_question_multianswer");
var _mdl_question_numerical = require("./mdl_question_numerical");
var _mdl_question_numerical_options = require("./mdl_question_numerical_options");
var _mdl_question_numerical_units = require("./mdl_question_numerical_units");
var _mdl_question_response_analysis = require("./mdl_question_response_analysis");
var _mdl_question_response_count = require("./mdl_question_response_count");
var _mdl_question_statistics = require("./mdl_question_statistics");
var _mdl_question_truefalse = require("./mdl_question_truefalse");
var _mdl_question_usages = require("./mdl_question_usages");
var _mdl_quiz = require("./mdl_quiz");
var _mdl_quiz_attempts = require("./mdl_quiz_attempts");
var _mdl_quiz_feedback = require("./mdl_quiz_feedback");
var _mdl_quiz_grades = require("./mdl_quiz_grades");
var _mdl_quiz_overrides = require("./mdl_quiz_overrides");
var _mdl_quiz_overview_regrades = require("./mdl_quiz_overview_regrades");
var _mdl_quiz_reports = require("./mdl_quiz_reports");
var _mdl_quiz_sections = require("./mdl_quiz_sections");
var _mdl_quiz_slot_tags = require("./mdl_quiz_slot_tags");
var _mdl_quiz_slots = require("./mdl_quiz_slots");
var _mdl_quiz_statistics = require("./mdl_quiz_statistics");
var _mdl_quizaccess_seb_quizsettings = require("./mdl_quizaccess_seb_quizsettings");
var _mdl_quizaccess_seb_template = require("./mdl_quizaccess_seb_template");
var _mdl_rating = require("./mdl_rating");
var _mdl_registration_hubs = require("./mdl_registration_hubs");
var _mdl_repository = require("./mdl_repository");
var _mdl_repository_instance_config = require("./mdl_repository_instance_config");
var _mdl_repository_instances = require("./mdl_repository_instances");
var _mdl_repository_onedrive_access = require("./mdl_repository_onedrive_access");
var _mdl_resource = require("./mdl_resource");
var _mdl_resource_old = require("./mdl_resource_old");
var _mdl_role = require("./mdl_role");
var _mdl_role_allow_assign = require("./mdl_role_allow_assign");
var _mdl_role_allow_override = require("./mdl_role_allow_override");
var _mdl_role_allow_switch = require("./mdl_role_allow_switch");
var _mdl_role_allow_view = require("./mdl_role_allow_view");
var _mdl_role_assignments = require("./mdl_role_assignments");
var _mdl_role_capabilities = require("./mdl_role_capabilities");
var _mdl_role_context_levels = require("./mdl_role_context_levels");
var _mdl_role_names = require("./mdl_role_names");
var _mdl_scale = require("./mdl_scale");
var _mdl_scale_history = require("./mdl_scale_history");
var _mdl_scorm = require("./mdl_scorm");
var _mdl_scorm_aicc_session = require("./mdl_scorm_aicc_session");
var _mdl_scorm_scoes = require("./mdl_scorm_scoes");
var _mdl_scorm_scoes_data = require("./mdl_scorm_scoes_data");
var _mdl_scorm_scoes_track = require("./mdl_scorm_scoes_track");
var _mdl_scorm_seq_mapinfo = require("./mdl_scorm_seq_mapinfo");
var _mdl_scorm_seq_objective = require("./mdl_scorm_seq_objective");
var _mdl_scorm_seq_rolluprule = require("./mdl_scorm_seq_rolluprule");
var _mdl_scorm_seq_rolluprulecond = require("./mdl_scorm_seq_rolluprulecond");
var _mdl_scorm_seq_rulecond = require("./mdl_scorm_seq_rulecond");
var _mdl_scorm_seq_ruleconds = require("./mdl_scorm_seq_ruleconds");
var _mdl_search_index_requests = require("./mdl_search_index_requests");
var _mdl_search_simpledb_index = require("./mdl_search_simpledb_index");
var _mdl_sessions = require("./mdl_sessions");
var _mdl_stats_daily = require("./mdl_stats_daily");
var _mdl_stats_monthly = require("./mdl_stats_monthly");
var _mdl_stats_user_daily = require("./mdl_stats_user_daily");
var _mdl_stats_user_monthly = require("./mdl_stats_user_monthly");
var _mdl_stats_user_weekly = require("./mdl_stats_user_weekly");
var _mdl_stats_weekly = require("./mdl_stats_weekly");
var _mdl_survey = require("./mdl_survey");
var _mdl_survey_analysis = require("./mdl_survey_analysis");
var _mdl_survey_answers = require("./mdl_survey_answers");
var _mdl_survey_questions = require("./mdl_survey_questions");
var _mdl_tag = require("./mdl_tag");
var _mdl_tag_area = require("./mdl_tag_area");
var _mdl_tag_coll = require("./mdl_tag_coll");
var _mdl_tag_correlation = require("./mdl_tag_correlation");
var _mdl_tag_instance = require("./mdl_tag_instance");
var _mdl_task_adhoc = require("./mdl_task_adhoc");
var _mdl_task_log = require("./mdl_task_log");
var _mdl_task_scheduled = require("./mdl_task_scheduled");
var _mdl_tool_cohortroles = require("./mdl_tool_cohortroles");
var _mdl_tool_customlang = require("./mdl_tool_customlang");
var _mdl_tool_customlang_components = require("./mdl_tool_customlang_components");
var _mdl_tool_dataprivacy_category = require("./mdl_tool_dataprivacy_category");
var _mdl_tool_dataprivacy_ctxexpired = require("./mdl_tool_dataprivacy_ctxexpired");
var _mdl_tool_dataprivacy_ctxinstance = require("./mdl_tool_dataprivacy_ctxinstance");
var _mdl_tool_dataprivacy_ctxlevel = require("./mdl_tool_dataprivacy_ctxlevel");
var _mdl_tool_dataprivacy_purpose = require("./mdl_tool_dataprivacy_purpose");
var _mdl_tool_dataprivacy_purposerole = require("./mdl_tool_dataprivacy_purposerole");
var _mdl_tool_dataprivacy_request = require("./mdl_tool_dataprivacy_request");
var _mdl_tool_monitor_events = require("./mdl_tool_monitor_events");
var _mdl_tool_monitor_history = require("./mdl_tool_monitor_history");
var _mdl_tool_monitor_rules = require("./mdl_tool_monitor_rules");
var _mdl_tool_monitor_subscriptions = require("./mdl_tool_monitor_subscriptions");
var _mdl_tool_policy = require("./mdl_tool_policy");
var _mdl_tool_policy_acceptances = require("./mdl_tool_policy_acceptances");
var _mdl_tool_policy_versions = require("./mdl_tool_policy_versions");
var _mdl_tool_recyclebin_category = require("./mdl_tool_recyclebin_category");
var _mdl_tool_recyclebin_course = require("./mdl_tool_recyclebin_course");
var _mdl_tool_usertours_steps = require("./mdl_tool_usertours_steps");
var _mdl_tool_usertours_tours = require("./mdl_tool_usertours_tours");
var _mdl_upgrade_log = require("./mdl_upgrade_log");
var _mdl_url = require("./mdl_url");
var _mdl_user = require("./mdl_user");
var _mdl_user_devices = require("./mdl_user_devices");
var _mdl_user_enrolments = require("./mdl_user_enrolments");
var _mdl_user_info_category = require("./mdl_user_info_category");
var _mdl_user_info_data = require("./mdl_user_info_data");
var _mdl_user_info_field = require("./mdl_user_info_field");
var _mdl_user_lastaccess = require("./mdl_user_lastaccess");
var _mdl_user_password_history = require("./mdl_user_password_history");
var _mdl_user_password_resets = require("./mdl_user_password_resets");
var _mdl_user_preferences = require("./mdl_user_preferences");
var _mdl_user_private_key = require("./mdl_user_private_key");
var _mdl_wiki = require("./mdl_wiki");
var _mdl_wiki_links = require("./mdl_wiki_links");
var _mdl_wiki_locks = require("./mdl_wiki_locks");
var _mdl_wiki_pages = require("./mdl_wiki_pages");
var _mdl_wiki_subwikis = require("./mdl_wiki_subwikis");
var _mdl_wiki_synonyms = require("./mdl_wiki_synonyms");
var _mdl_wiki_versions = require("./mdl_wiki_versions");
var _mdl_workshop = require("./mdl_workshop");
var _mdl_workshop_aggregations = require("./mdl_workshop_aggregations");
var _mdl_workshop_assessments = require("./mdl_workshop_assessments");
var _mdl_workshop_grades = require("./mdl_workshop_grades");
var _mdl_workshop_submissions = require("./mdl_workshop_submissions");
var _mdl_workshopallocation_scheduled = require("./mdl_workshopallocation_scheduled");
var _mdl_workshopeval_best_settings = require("./mdl_workshopeval_best_settings");
var _mdl_workshopform_accumulative = require("./mdl_workshopform_accumulative");
var _mdl_workshopform_comments = require("./mdl_workshopform_comments");
var _mdl_workshopform_numerrors = require("./mdl_workshopform_numerrors");
var _mdl_workshopform_numerrors_map = require("./mdl_workshopform_numerrors_map");
var _mdl_workshopform_rubric = require("./mdl_workshopform_rubric");
var _mdl_workshopform_rubric_config = require("./mdl_workshopform_rubric_config");
var _mdl_workshopform_rubric_levels = require("./mdl_workshopform_rubric_levels");

function initModels(sequelize) {
  var mdl_analytics_indicator_calc = _mdl_analytics_indicator_calc(sequelize, DataTypes);
  var mdl_analytics_models = _mdl_analytics_models(sequelize, DataTypes);
  var mdl_analytics_models_log = _mdl_analytics_models_log(sequelize, DataTypes);
  var mdl_analytics_predict_samples = _mdl_analytics_predict_samples(sequelize, DataTypes);
  var mdl_analytics_prediction_actions = _mdl_analytics_prediction_actions(sequelize, DataTypes);
  var mdl_analytics_predictions = _mdl_analytics_predictions(sequelize, DataTypes);
  var mdl_analytics_train_samples = _mdl_analytics_train_samples(sequelize, DataTypes);
  var mdl_analytics_used_analysables = _mdl_analytics_used_analysables(sequelize, DataTypes);
  var mdl_analytics_used_files = _mdl_analytics_used_files(sequelize, DataTypes);
  var mdl_assign = _mdl_assign(sequelize, DataTypes);
  var mdl_assign_grades = _mdl_assign_grades(sequelize, DataTypes);
  var mdl_assign_overrides = _mdl_assign_overrides(sequelize, DataTypes);
  var mdl_assign_plugin_config = _mdl_assign_plugin_config(sequelize, DataTypes);
  var mdl_assign_submission = _mdl_assign_submission(sequelize, DataTypes);
  var mdl_assign_user_flags = _mdl_assign_user_flags(sequelize, DataTypes);
  var mdl_assign_user_mapping = _mdl_assign_user_mapping(sequelize, DataTypes);
  var mdl_assignfeedback_comments = _mdl_assignfeedback_comments(sequelize, DataTypes);
  var mdl_assignfeedback_editpdf_annot = _mdl_assignfeedback_editpdf_annot(sequelize, DataTypes);
  var mdl_assignfeedback_editpdf_cmnt = _mdl_assignfeedback_editpdf_cmnt(sequelize, DataTypes);
  var mdl_assignfeedback_editpdf_queue = _mdl_assignfeedback_editpdf_queue(sequelize, DataTypes);
  var mdl_assignfeedback_editpdf_quick = _mdl_assignfeedback_editpdf_quick(sequelize, DataTypes);
  var mdl_assignfeedback_editpdf_rot = _mdl_assignfeedback_editpdf_rot(sequelize, DataTypes);
  var mdl_assignfeedback_file = _mdl_assignfeedback_file(sequelize, DataTypes);
  var mdl_assignment = _mdl_assignment(sequelize, DataTypes);
  var mdl_assignment_submissions = _mdl_assignment_submissions(sequelize, DataTypes);
  var mdl_assignment_upgrade = _mdl_assignment_upgrade(sequelize, DataTypes);
  var mdl_assignsubmission_file = _mdl_assignsubmission_file(sequelize, DataTypes);
  var mdl_assignsubmission_onlinetext = _mdl_assignsubmission_onlinetext(sequelize, DataTypes);
  var mdl_auth_oauth2_linked_login = _mdl_auth_oauth2_linked_login(sequelize, DataTypes);
  var mdl_backup_controllers = _mdl_backup_controllers(sequelize, DataTypes);
  var mdl_backup_courses = _mdl_backup_courses(sequelize, DataTypes);
  var mdl_backup_logs = _mdl_backup_logs(sequelize, DataTypes);
  var mdl_badge = _mdl_badge(sequelize, DataTypes);
  var mdl_badge_alignment = _mdl_badge_alignment(sequelize, DataTypes);
  var mdl_badge_backpack = _mdl_badge_backpack(sequelize, DataTypes);
  var mdl_badge_criteria = _mdl_badge_criteria(sequelize, DataTypes);
  var mdl_badge_criteria_met = _mdl_badge_criteria_met(sequelize, DataTypes);
  var mdl_badge_criteria_param = _mdl_badge_criteria_param(sequelize, DataTypes);
  var mdl_badge_endorsement = _mdl_badge_endorsement(sequelize, DataTypes);
  var mdl_badge_external = _mdl_badge_external(sequelize, DataTypes);
  var mdl_badge_external_backpack = _mdl_badge_external_backpack(sequelize, DataTypes);
  var mdl_badge_external_identifier = _mdl_badge_external_identifier(sequelize, DataTypes);
  var mdl_badge_issued = _mdl_badge_issued(sequelize, DataTypes);
  var mdl_badge_manual_award = _mdl_badge_manual_award(sequelize, DataTypes);
  var mdl_badge_related = _mdl_badge_related(sequelize, DataTypes);
  var mdl_bigbluebuttonbn = _mdl_bigbluebuttonbn(sequelize, DataTypes);
  var mdl_bigbluebuttonbn_logs = _mdl_bigbluebuttonbn_logs(sequelize, DataTypes);
  var mdl_block = _mdl_block(sequelize, DataTypes);
  var mdl_block_instances = _mdl_block_instances(sequelize, DataTypes);
  var mdl_block_positions = _mdl_block_positions(sequelize, DataTypes);
  var mdl_block_recent_activity = _mdl_block_recent_activity(sequelize, DataTypes);
  var mdl_block_recentlyaccesseditems = _mdl_block_recentlyaccesseditems(sequelize, DataTypes);
  var mdl_block_rss_client = _mdl_block_rss_client(sequelize, DataTypes);
  var mdl_block_xp = _mdl_block_xp(sequelize, DataTypes);
  var mdl_block_xp_config = _mdl_block_xp_config(sequelize, DataTypes);
  var mdl_block_xp_filters = _mdl_block_xp_filters(sequelize, DataTypes);
  var mdl_block_xp_log = _mdl_block_xp_log(sequelize, DataTypes);
  var mdl_blog_association = _mdl_blog_association(sequelize, DataTypes);
  var mdl_blog_external = _mdl_blog_external(sequelize, DataTypes);
  var mdl_book = _mdl_book(sequelize, DataTypes);
  var mdl_book_chapters = _mdl_book_chapters(sequelize, DataTypes);
  var mdl_cache_filters = _mdl_cache_filters(sequelize, DataTypes);
  var mdl_cache_flags = _mdl_cache_flags(sequelize, DataTypes);
  var mdl_capabilities = _mdl_capabilities(sequelize, DataTypes);
  var mdl_chat = _mdl_chat(sequelize, DataTypes);
  var mdl_chat_messages = _mdl_chat_messages(sequelize, DataTypes);
  var mdl_chat_messages_current = _mdl_chat_messages_current(sequelize, DataTypes);
  var mdl_chat_users = _mdl_chat_users(sequelize, DataTypes);
  var mdl_choice = _mdl_choice(sequelize, DataTypes);
  var mdl_choice_answers = _mdl_choice_answers(sequelize, DataTypes);
  var mdl_choice_options = _mdl_choice_options(sequelize, DataTypes);
  var mdl_cohort = _mdl_cohort(sequelize, DataTypes);
  var mdl_cohort_members = _mdl_cohort_members(sequelize, DataTypes);
  var mdl_comments = _mdl_comments(sequelize, DataTypes);
  var mdl_competency = _mdl_competency(sequelize, DataTypes);
  var mdl_competency_coursecomp = _mdl_competency_coursecomp(sequelize, DataTypes);
  var mdl_competency_coursecompsetting = _mdl_competency_coursecompsetting(sequelize, DataTypes);
  var mdl_competency_evidence = _mdl_competency_evidence(sequelize, DataTypes);
  var mdl_competency_framework = _mdl_competency_framework(sequelize, DataTypes);
  var mdl_competency_modulecomp = _mdl_competency_modulecomp(sequelize, DataTypes);
  var mdl_competency_plan = _mdl_competency_plan(sequelize, DataTypes);
  var mdl_competency_plancomp = _mdl_competency_plancomp(sequelize, DataTypes);
  var mdl_competency_relatedcomp = _mdl_competency_relatedcomp(sequelize, DataTypes);
  var mdl_competency_template = _mdl_competency_template(sequelize, DataTypes);
  var mdl_competency_templatecohort = _mdl_competency_templatecohort(sequelize, DataTypes);
  var mdl_competency_templatecomp = _mdl_competency_templatecomp(sequelize, DataTypes);
  var mdl_competency_usercomp = _mdl_competency_usercomp(sequelize, DataTypes);
  var mdl_competency_usercompcourse = _mdl_competency_usercompcourse(sequelize, DataTypes);
  var mdl_competency_usercompplan = _mdl_competency_usercompplan(sequelize, DataTypes);
  var mdl_competency_userevidence = _mdl_competency_userevidence(sequelize, DataTypes);
  var mdl_competency_userevidencecomp = _mdl_competency_userevidencecomp(sequelize, DataTypes);
  var mdl_config = _mdl_config(sequelize, DataTypes);
  var mdl_config_log = _mdl_config_log(sequelize, DataTypes);
  var mdl_config_plugins = _mdl_config_plugins(sequelize, DataTypes);
  var mdl_context = _mdl_context(sequelize, DataTypes);
  var mdl_context_temp = _mdl_context_temp(sequelize, DataTypes);
  var mdl_course = _mdl_course(sequelize, DataTypes);
  var mdl_course_categories = _mdl_course_categories(sequelize, DataTypes);
  var mdl_course_completion_aggr_methd = _mdl_course_completion_aggr_methd(sequelize, DataTypes);
  var mdl_course_completion_crit_compl = _mdl_course_completion_crit_compl(sequelize, DataTypes);
  var mdl_course_completion_criteria = _mdl_course_completion_criteria(sequelize, DataTypes);
  var mdl_course_completion_defaults = _mdl_course_completion_defaults(sequelize, DataTypes);
  var mdl_course_completions = _mdl_course_completions(sequelize, DataTypes);
  var mdl_course_format_options = _mdl_course_format_options(sequelize, DataTypes);
  var mdl_course_modules = _mdl_course_modules(sequelize, DataTypes);
  var mdl_course_modules_completion = _mdl_course_modules_completion(sequelize, DataTypes);
  var mdl_course_published = _mdl_course_published(sequelize, DataTypes);
  var mdl_course_request = _mdl_course_request(sequelize, DataTypes);
  var mdl_course_sections = _mdl_course_sections(sequelize, DataTypes);
  var mdl_customfield_category = _mdl_customfield_category(sequelize, DataTypes);
  var mdl_customfield_data = _mdl_customfield_data(sequelize, DataTypes);
  var mdl_customfield_field = _mdl_customfield_field(sequelize, DataTypes);
  var mdl_data = _mdl_data(sequelize, DataTypes);
  var mdl_data_content = _mdl_data_content(sequelize, DataTypes);
  var mdl_data_fields = _mdl_data_fields(sequelize, DataTypes);
  var mdl_data_records = _mdl_data_records(sequelize, DataTypes);
  var mdl_editor_atto_autosave = _mdl_editor_atto_autosave(sequelize, DataTypes);
  var mdl_enrol = _mdl_enrol(sequelize, DataTypes);
  var mdl_enrol_flatfile = _mdl_enrol_flatfile(sequelize, DataTypes);
  var mdl_enrol_lti_lti2_consumer = _mdl_enrol_lti_lti2_consumer(sequelize, DataTypes);
  var mdl_enrol_lti_lti2_context = _mdl_enrol_lti_lti2_context(sequelize, DataTypes);
  var mdl_enrol_lti_lti2_nonce = _mdl_enrol_lti_lti2_nonce(sequelize, DataTypes);
  var mdl_enrol_lti_lti2_resource_link = _mdl_enrol_lti_lti2_resource_link(sequelize, DataTypes);
  var mdl_enrol_lti_lti2_share_key = _mdl_enrol_lti_lti2_share_key(sequelize, DataTypes);
  var mdl_enrol_lti_lti2_tool_proxy = _mdl_enrol_lti_lti2_tool_proxy(sequelize, DataTypes);
  var mdl_enrol_lti_lti2_user_result = _mdl_enrol_lti_lti2_user_result(sequelize, DataTypes);
  var mdl_enrol_lti_tool_consumer_map = _mdl_enrol_lti_tool_consumer_map(sequelize, DataTypes);
  var mdl_enrol_lti_tools = _mdl_enrol_lti_tools(sequelize, DataTypes);
  var mdl_enrol_lti_users = _mdl_enrol_lti_users(sequelize, DataTypes);
  var mdl_enrol_paypal = _mdl_enrol_paypal(sequelize, DataTypes);
  var mdl_event = _mdl_event(sequelize, DataTypes);
  var mdl_event_subscriptions = _mdl_event_subscriptions(sequelize, DataTypes);
  var mdl_events_handlers = _mdl_events_handlers(sequelize, DataTypes);
  var mdl_events_queue = _mdl_events_queue(sequelize, DataTypes);
  var mdl_events_queue_handlers = _mdl_events_queue_handlers(sequelize, DataTypes);
  var mdl_external_functions = _mdl_external_functions(sequelize, DataTypes);
  var mdl_external_services = _mdl_external_services(sequelize, DataTypes);
  var mdl_external_services_functions = _mdl_external_services_functions(sequelize, DataTypes);
  var mdl_external_services_users = _mdl_external_services_users(sequelize, DataTypes);
  var mdl_external_tokens = _mdl_external_tokens(sequelize, DataTypes);
  var mdl_favourite = _mdl_favourite(sequelize, DataTypes);
  var mdl_feedback = _mdl_feedback(sequelize, DataTypes);
  var mdl_feedback_completed = _mdl_feedback_completed(sequelize, DataTypes);
  var mdl_feedback_completedtmp = _mdl_feedback_completedtmp(sequelize, DataTypes);
  var mdl_feedback_item = _mdl_feedback_item(sequelize, DataTypes);
  var mdl_feedback_sitecourse_map = _mdl_feedback_sitecourse_map(sequelize, DataTypes);
  var mdl_feedback_template = _mdl_feedback_template(sequelize, DataTypes);
  var mdl_feedback_value = _mdl_feedback_value(sequelize, DataTypes);
  var mdl_feedback_valuetmp = _mdl_feedback_valuetmp(sequelize, DataTypes);
  var mdl_file_conversion = _mdl_file_conversion(sequelize, DataTypes);
  var mdl_files = _mdl_files(sequelize, DataTypes);
  var mdl_files_reference = _mdl_files_reference(sequelize, DataTypes);
  var mdl_filter_active = _mdl_filter_active(sequelize, DataTypes);
  var mdl_filter_config = _mdl_filter_config(sequelize, DataTypes);
  var mdl_folder = _mdl_folder(sequelize, DataTypes);
  var mdl_forum = _mdl_forum(sequelize, DataTypes);
  var mdl_forum_digests = _mdl_forum_digests(sequelize, DataTypes);
  var mdl_forum_discussion_subs = _mdl_forum_discussion_subs(sequelize, DataTypes);
  var mdl_forum_discussions = _mdl_forum_discussions(sequelize, DataTypes);
  var mdl_forum_grades = _mdl_forum_grades(sequelize, DataTypes);
  var mdl_forum_posts = _mdl_forum_posts(sequelize, DataTypes);
  var mdl_forum_queue = _mdl_forum_queue(sequelize, DataTypes);
  var mdl_forum_read = _mdl_forum_read(sequelize, DataTypes);
  var mdl_forum_subscriptions = _mdl_forum_subscriptions(sequelize, DataTypes);
  var mdl_forum_track_prefs = _mdl_forum_track_prefs(sequelize, DataTypes);
  var mdl_game = _mdl_game(sequelize, DataTypes);
  var mdl_game_attempts = _mdl_game_attempts(sequelize, DataTypes);
  var mdl_game_bookquiz = _mdl_game_bookquiz(sequelize, DataTypes);
  var mdl_game_bookquiz_chapters = _mdl_game_bookquiz_chapters(sequelize, DataTypes);
  var mdl_game_bookquiz_questions = _mdl_game_bookquiz_questions(sequelize, DataTypes);
  var mdl_game_cross = _mdl_game_cross(sequelize, DataTypes);
  var mdl_game_cryptex = _mdl_game_cryptex(sequelize, DataTypes);
  var mdl_game_export_html = _mdl_game_export_html(sequelize, DataTypes);
  var mdl_game_export_javame = _mdl_game_export_javame(sequelize, DataTypes);
  var mdl_game_grades = _mdl_game_grades(sequelize, DataTypes);
  var mdl_game_hangman = _mdl_game_hangman(sequelize, DataTypes);
  var mdl_game_hiddenpicture = _mdl_game_hiddenpicture(sequelize, DataTypes);
  var mdl_game_millionaire = _mdl_game_millionaire(sequelize, DataTypes);
  var mdl_game_queries = _mdl_game_queries(sequelize, DataTypes);
  var mdl_game_repetitions = _mdl_game_repetitions(sequelize, DataTypes);
  var mdl_game_snakes = _mdl_game_snakes(sequelize, DataTypes);
  var mdl_game_snakes_database = _mdl_game_snakes_database(sequelize, DataTypes);
  var mdl_game_sudoku = _mdl_game_sudoku(sequelize, DataTypes);
  var mdl_game_sudoku_database = _mdl_game_sudoku_database(sequelize, DataTypes);
  var mdl_glossary = _mdl_glossary(sequelize, DataTypes);
  var mdl_glossary_alias = _mdl_glossary_alias(sequelize, DataTypes);
  var mdl_glossary_categories = _mdl_glossary_categories(sequelize, DataTypes);
  var mdl_glossary_entries = _mdl_glossary_entries(sequelize, DataTypes);
  var mdl_glossary_entries_categories = _mdl_glossary_entries_categories(sequelize, DataTypes);
  var mdl_glossary_formats = _mdl_glossary_formats(sequelize, DataTypes);
  var mdl_grade_categories = _mdl_grade_categories(sequelize, DataTypes);
  var mdl_grade_categories_history = _mdl_grade_categories_history(sequelize, DataTypes);
  var mdl_grade_grades = _mdl_grade_grades(sequelize, DataTypes);
  var mdl_grade_grades_history = _mdl_grade_grades_history(sequelize, DataTypes);
  var mdl_grade_import_newitem = _mdl_grade_import_newitem(sequelize, DataTypes);
  var mdl_grade_import_values = _mdl_grade_import_values(sequelize, DataTypes);
  var mdl_grade_items = _mdl_grade_items(sequelize, DataTypes);
  var mdl_grade_items_history = _mdl_grade_items_history(sequelize, DataTypes);
  var mdl_grade_letters = _mdl_grade_letters(sequelize, DataTypes);
  var mdl_grade_outcomes = _mdl_grade_outcomes(sequelize, DataTypes);
  var mdl_grade_outcomes_courses = _mdl_grade_outcomes_courses(sequelize, DataTypes);
  var mdl_grade_outcomes_history = _mdl_grade_outcomes_history(sequelize, DataTypes);
  var mdl_grade_settings = _mdl_grade_settings(sequelize, DataTypes);
  var mdl_grading_areas = _mdl_grading_areas(sequelize, DataTypes);
  var mdl_grading_definitions = _mdl_grading_definitions(sequelize, DataTypes);
  var mdl_grading_instances = _mdl_grading_instances(sequelize, DataTypes);
  var mdl_gradingform_guide_comments = _mdl_gradingform_guide_comments(sequelize, DataTypes);
  var mdl_gradingform_guide_criteria = _mdl_gradingform_guide_criteria(sequelize, DataTypes);
  var mdl_gradingform_guide_fillings = _mdl_gradingform_guide_fillings(sequelize, DataTypes);
  var mdl_gradingform_rubric_criteria = _mdl_gradingform_rubric_criteria(sequelize, DataTypes);
  var mdl_gradingform_rubric_fillings = _mdl_gradingform_rubric_fillings(sequelize, DataTypes);
  var mdl_gradingform_rubric_levels = _mdl_gradingform_rubric_levels(sequelize, DataTypes);
  var mdl_groupings = _mdl_groupings(sequelize, DataTypes);
  var mdl_groupings_groups = _mdl_groupings_groups(sequelize, DataTypes);
  var mdl_groups = _mdl_groups(sequelize, DataTypes);
  var mdl_groups_members = _mdl_groups_members(sequelize, DataTypes);
  var mdl_h5p = _mdl_h5p(sequelize, DataTypes);
  var mdl_h5p_contents_libraries = _mdl_h5p_contents_libraries(sequelize, DataTypes);
  var mdl_h5p_libraries = _mdl_h5p_libraries(sequelize, DataTypes);
  var mdl_h5p_libraries_cachedassets = _mdl_h5p_libraries_cachedassets(sequelize, DataTypes);
  var mdl_h5p_library_dependencies = _mdl_h5p_library_dependencies(sequelize, DataTypes);
  var mdl_hvp = _mdl_hvp(sequelize, DataTypes);
  var mdl_hvp_auth = _mdl_hvp_auth(sequelize, DataTypes);
  var mdl_hvp_content_hub_cache = _mdl_hvp_content_hub_cache(sequelize, DataTypes);
  var mdl_hvp_content_user_data = _mdl_hvp_content_user_data(sequelize, DataTypes);
  var mdl_hvp_contents_libraries = _mdl_hvp_contents_libraries(sequelize, DataTypes);
  var mdl_hvp_counters = _mdl_hvp_counters(sequelize, DataTypes);
  var mdl_hvp_events = _mdl_hvp_events(sequelize, DataTypes);
  var mdl_hvp_libraries = _mdl_hvp_libraries(sequelize, DataTypes);
  var mdl_hvp_libraries_cachedassets = _mdl_hvp_libraries_cachedassets(sequelize, DataTypes);
  var mdl_hvp_libraries_hub_cache = _mdl_hvp_libraries_hub_cache(sequelize, DataTypes);
  var mdl_hvp_libraries_languages = _mdl_hvp_libraries_languages(sequelize, DataTypes);
  var mdl_hvp_libraries_libraries = _mdl_hvp_libraries_libraries(sequelize, DataTypes);
  var mdl_hvp_tmpfiles = _mdl_hvp_tmpfiles(sequelize, DataTypes);
  var mdl_hvp_xapi_results = _mdl_hvp_xapi_results(sequelize, DataTypes);
  var mdl_imscp = _mdl_imscp(sequelize, DataTypes);
  var mdl_label = _mdl_label(sequelize, DataTypes);
  var mdl_lesson = _mdl_lesson(sequelize, DataTypes);
  var mdl_lesson_answers = _mdl_lesson_answers(sequelize, DataTypes);
  var mdl_lesson_attempts = _mdl_lesson_attempts(sequelize, DataTypes);
  var mdl_lesson_branch = _mdl_lesson_branch(sequelize, DataTypes);
  var mdl_lesson_grades = _mdl_lesson_grades(sequelize, DataTypes);
  var mdl_lesson_overrides = _mdl_lesson_overrides(sequelize, DataTypes);
  var mdl_lesson_pages = _mdl_lesson_pages(sequelize, DataTypes);
  var mdl_lesson_timer = _mdl_lesson_timer(sequelize, DataTypes);
  var mdl_license = _mdl_license(sequelize, DataTypes);
  var mdl_lock_db = _mdl_lock_db(sequelize, DataTypes);
  var mdl_log = _mdl_log(sequelize, DataTypes);
  var mdl_log_display = _mdl_log_display(sequelize, DataTypes);
  var mdl_log_queries = _mdl_log_queries(sequelize, DataTypes);
  var mdl_logstore_standard_log = _mdl_logstore_standard_log(sequelize, DataTypes);
  var mdl_lti = _mdl_lti(sequelize, DataTypes);
  var mdl_lti_access_tokens = _mdl_lti_access_tokens(sequelize, DataTypes);
  var mdl_lti_submission = _mdl_lti_submission(sequelize, DataTypes);
  var mdl_lti_tool_proxies = _mdl_lti_tool_proxies(sequelize, DataTypes);
  var mdl_lti_tool_settings = _mdl_lti_tool_settings(sequelize, DataTypes);
  var mdl_lti_types = _mdl_lti_types(sequelize, DataTypes);
  var mdl_lti_types_config = _mdl_lti_types_config(sequelize, DataTypes);
  var mdl_ltiservice_gradebookservices = _mdl_ltiservice_gradebookservices(sequelize, DataTypes);
  var mdl_message = _mdl_message(sequelize, DataTypes);
  var mdl_message_airnotifier_devices = _mdl_message_airnotifier_devices(sequelize, DataTypes);
  var mdl_message_contact_requests = _mdl_message_contact_requests(sequelize, DataTypes);
  var mdl_message_contacts = _mdl_message_contacts(sequelize, DataTypes);
  var mdl_message_conversation_actions = _mdl_message_conversation_actions(sequelize, DataTypes);
  var mdl_message_conversation_members = _mdl_message_conversation_members(sequelize, DataTypes);
  var mdl_message_conversations = _mdl_message_conversations(sequelize, DataTypes);
  var mdl_message_email_messages = _mdl_message_email_messages(sequelize, DataTypes);
  var mdl_message_popup = _mdl_message_popup(sequelize, DataTypes);
  var mdl_message_popup_notifications = _mdl_message_popup_notifications(sequelize, DataTypes);
  var mdl_message_processors = _mdl_message_processors(sequelize, DataTypes);
  var mdl_message_providers = _mdl_message_providers(sequelize, DataTypes);
  var mdl_message_read = _mdl_message_read(sequelize, DataTypes);
  var mdl_message_user_actions = _mdl_message_user_actions(sequelize, DataTypes);
  var mdl_message_users_blocked = _mdl_message_users_blocked(sequelize, DataTypes);
  var mdl_messageinbound_datakeys = _mdl_messageinbound_datakeys(sequelize, DataTypes);
  var mdl_messageinbound_handlers = _mdl_messageinbound_handlers(sequelize, DataTypes);
  var mdl_messageinbound_messagelist = _mdl_messageinbound_messagelist(sequelize, DataTypes);
  var mdl_messages = _mdl_messages(sequelize, DataTypes);
  var mdl_mnet_application = _mdl_mnet_application(sequelize, DataTypes);
  var mdl_mnet_host = _mdl_mnet_host(sequelize, DataTypes);
  var mdl_mnet_host2service = _mdl_mnet_host2service(sequelize, DataTypes);
  var mdl_mnet_log = _mdl_mnet_log(sequelize, DataTypes);
  var mdl_mnet_remote_rpc = _mdl_mnet_remote_rpc(sequelize, DataTypes);
  var mdl_mnet_remote_service2rpc = _mdl_mnet_remote_service2rpc(sequelize, DataTypes);
  var mdl_mnet_rpc = _mdl_mnet_rpc(sequelize, DataTypes);
  var mdl_mnet_service = _mdl_mnet_service(sequelize, DataTypes);
  var mdl_mnet_service2rpc = _mdl_mnet_service2rpc(sequelize, DataTypes);
  var mdl_mnet_session = _mdl_mnet_session(sequelize, DataTypes);
  var mdl_mnet_sso_access_control = _mdl_mnet_sso_access_control(sequelize, DataTypes);
  var mdl_mnetservice_enrol_courses = _mdl_mnetservice_enrol_courses(sequelize, DataTypes);
  var mdl_mnetservice_enrol_enrolments = _mdl_mnetservice_enrol_enrolments(sequelize, DataTypes);
  var mdl_modules = _mdl_modules(sequelize, DataTypes);
  var mdl_my_pages = _mdl_my_pages(sequelize, DataTypes);
  var mdl_notifications = _mdl_notifications(sequelize, DataTypes);
  var mdl_oauth2_access_token = _mdl_oauth2_access_token(sequelize, DataTypes);
  var mdl_oauth2_endpoint = _mdl_oauth2_endpoint(sequelize, DataTypes);
  var mdl_oauth2_issuer = _mdl_oauth2_issuer(sequelize, DataTypes);
  var mdl_oauth2_system_account = _mdl_oauth2_system_account(sequelize, DataTypes);
  var mdl_oauth2_user_field_mapping = _mdl_oauth2_user_field_mapping(sequelize, DataTypes);
  var mdl_page = _mdl_page(sequelize, DataTypes);
  var mdl_portfolio_instance = _mdl_portfolio_instance(sequelize, DataTypes);
  var mdl_portfolio_instance_config = _mdl_portfolio_instance_config(sequelize, DataTypes);
  var mdl_portfolio_instance_user = _mdl_portfolio_instance_user(sequelize, DataTypes);
  var mdl_portfolio_log = _mdl_portfolio_log(sequelize, DataTypes);
  var mdl_portfolio_mahara_queue = _mdl_portfolio_mahara_queue(sequelize, DataTypes);
  var mdl_portfolio_tempdata = _mdl_portfolio_tempdata(sequelize, DataTypes);
  var mdl_post = _mdl_post(sequelize, DataTypes);
  var mdl_profiling = _mdl_profiling(sequelize, DataTypes);
  var mdl_qtype_ddimageortext = _mdl_qtype_ddimageortext(sequelize, DataTypes);
  var mdl_qtype_ddimageortext_drags = _mdl_qtype_ddimageortext_drags(sequelize, DataTypes);
  var mdl_qtype_ddimageortext_drops = _mdl_qtype_ddimageortext_drops(sequelize, DataTypes);
  var mdl_qtype_ddmarker = _mdl_qtype_ddmarker(sequelize, DataTypes);
  var mdl_qtype_ddmarker_drags = _mdl_qtype_ddmarker_drags(sequelize, DataTypes);
  var mdl_qtype_ddmarker_drops = _mdl_qtype_ddmarker_drops(sequelize, DataTypes);
  var mdl_qtype_essay_options = _mdl_qtype_essay_options(sequelize, DataTypes);
  var mdl_qtype_match_options = _mdl_qtype_match_options(sequelize, DataTypes);
  var mdl_qtype_match_subquestions = _mdl_qtype_match_subquestions(sequelize, DataTypes);
  var mdl_qtype_multichoice_options = _mdl_qtype_multichoice_options(sequelize, DataTypes);
  var mdl_qtype_randomsamatch_options = _mdl_qtype_randomsamatch_options(sequelize, DataTypes);
  var mdl_qtype_shortanswer_options = _mdl_qtype_shortanswer_options(sequelize, DataTypes);
  var mdl_question = _mdl_question(sequelize, DataTypes);
  var mdl_question_answers = _mdl_question_answers(sequelize, DataTypes);
  var mdl_question_attempt_step_data = _mdl_question_attempt_step_data(sequelize, DataTypes);
  var mdl_question_attempt_steps = _mdl_question_attempt_steps(sequelize, DataTypes);
  var mdl_question_attempts = _mdl_question_attempts(sequelize, DataTypes);
  var mdl_question_calculated = _mdl_question_calculated(sequelize, DataTypes);
  var mdl_question_calculated_options = _mdl_question_calculated_options(sequelize, DataTypes);
  var mdl_question_categories = _mdl_question_categories(sequelize, DataTypes);
  var mdl_question_dataset_definitions = _mdl_question_dataset_definitions(sequelize, DataTypes);
  var mdl_question_dataset_items = _mdl_question_dataset_items(sequelize, DataTypes);
  var mdl_question_datasets = _mdl_question_datasets(sequelize, DataTypes);
  var mdl_question_ddwtos = _mdl_question_ddwtos(sequelize, DataTypes);
  var mdl_question_gapselect = _mdl_question_gapselect(sequelize, DataTypes);
  var mdl_question_hints = _mdl_question_hints(sequelize, DataTypes);
  var mdl_question_multianswer = _mdl_question_multianswer(sequelize, DataTypes);
  var mdl_question_numerical = _mdl_question_numerical(sequelize, DataTypes);
  var mdl_question_numerical_options = _mdl_question_numerical_options(sequelize, DataTypes);
  var mdl_question_numerical_units = _mdl_question_numerical_units(sequelize, DataTypes);
  var mdl_question_response_analysis = _mdl_question_response_analysis(sequelize, DataTypes);
  var mdl_question_response_count = _mdl_question_response_count(sequelize, DataTypes);
  var mdl_question_statistics = _mdl_question_statistics(sequelize, DataTypes);
  var mdl_question_truefalse = _mdl_question_truefalse(sequelize, DataTypes);
  var mdl_question_usages = _mdl_question_usages(sequelize, DataTypes);
  var mdl_quiz = _mdl_quiz(sequelize, DataTypes);
  var mdl_quiz_attempts = _mdl_quiz_attempts(sequelize, DataTypes);
  var mdl_quiz_feedback = _mdl_quiz_feedback(sequelize, DataTypes);
  var mdl_quiz_grades = _mdl_quiz_grades(sequelize, DataTypes);
  var mdl_quiz_overrides = _mdl_quiz_overrides(sequelize, DataTypes);
  var mdl_quiz_overview_regrades = _mdl_quiz_overview_regrades(sequelize, DataTypes);
  var mdl_quiz_reports = _mdl_quiz_reports(sequelize, DataTypes);
  var mdl_quiz_sections = _mdl_quiz_sections(sequelize, DataTypes);
  var mdl_quiz_slot_tags = _mdl_quiz_slot_tags(sequelize, DataTypes);
  var mdl_quiz_slots = _mdl_quiz_slots(sequelize, DataTypes);
  var mdl_quiz_statistics = _mdl_quiz_statistics(sequelize, DataTypes);
  var mdl_quizaccess_seb_quizsettings = _mdl_quizaccess_seb_quizsettings(sequelize, DataTypes);
  var mdl_quizaccess_seb_template = _mdl_quizaccess_seb_template(sequelize, DataTypes);
  var mdl_rating = _mdl_rating(sequelize, DataTypes);
  var mdl_registration_hubs = _mdl_registration_hubs(sequelize, DataTypes);
  var mdl_repository = _mdl_repository(sequelize, DataTypes);
  var mdl_repository_instance_config = _mdl_repository_instance_config(sequelize, DataTypes);
  var mdl_repository_instances = _mdl_repository_instances(sequelize, DataTypes);
  var mdl_repository_onedrive_access = _mdl_repository_onedrive_access(sequelize, DataTypes);
  var mdl_resource = _mdl_resource(sequelize, DataTypes);
  var mdl_resource_old = _mdl_resource_old(sequelize, DataTypes);
  var mdl_role = _mdl_role(sequelize, DataTypes);
  var mdl_role_allow_assign = _mdl_role_allow_assign(sequelize, DataTypes);
  var mdl_role_allow_override = _mdl_role_allow_override(sequelize, DataTypes);
  var mdl_role_allow_switch = _mdl_role_allow_switch(sequelize, DataTypes);
  var mdl_role_allow_view = _mdl_role_allow_view(sequelize, DataTypes);
  var mdl_role_assignments = _mdl_role_assignments(sequelize, DataTypes);
  var mdl_role_capabilities = _mdl_role_capabilities(sequelize, DataTypes);
  var mdl_role_context_levels = _mdl_role_context_levels(sequelize, DataTypes);
  var mdl_role_names = _mdl_role_names(sequelize, DataTypes);
  var mdl_scale = _mdl_scale(sequelize, DataTypes);
  var mdl_scale_history = _mdl_scale_history(sequelize, DataTypes);
  var mdl_scorm = _mdl_scorm(sequelize, DataTypes);
  var mdl_scorm_aicc_session = _mdl_scorm_aicc_session(sequelize, DataTypes);
  var mdl_scorm_scoes = _mdl_scorm_scoes(sequelize, DataTypes);
  var mdl_scorm_scoes_data = _mdl_scorm_scoes_data(sequelize, DataTypes);
  var mdl_scorm_scoes_track = _mdl_scorm_scoes_track(sequelize, DataTypes);
  var mdl_scorm_seq_mapinfo = _mdl_scorm_seq_mapinfo(sequelize, DataTypes);
  var mdl_scorm_seq_objective = _mdl_scorm_seq_objective(sequelize, DataTypes);
  var mdl_scorm_seq_rolluprule = _mdl_scorm_seq_rolluprule(sequelize, DataTypes);
  var mdl_scorm_seq_rolluprulecond = _mdl_scorm_seq_rolluprulecond(sequelize, DataTypes);
  var mdl_scorm_seq_rulecond = _mdl_scorm_seq_rulecond(sequelize, DataTypes);
  var mdl_scorm_seq_ruleconds = _mdl_scorm_seq_ruleconds(sequelize, DataTypes);
  var mdl_search_index_requests = _mdl_search_index_requests(sequelize, DataTypes);
  var mdl_search_simpledb_index = _mdl_search_simpledb_index(sequelize, DataTypes);
  var mdl_sessions = _mdl_sessions(sequelize, DataTypes);
  var mdl_stats_daily = _mdl_stats_daily(sequelize, DataTypes);
  var mdl_stats_monthly = _mdl_stats_monthly(sequelize, DataTypes);
  var mdl_stats_user_daily = _mdl_stats_user_daily(sequelize, DataTypes);
  var mdl_stats_user_monthly = _mdl_stats_user_monthly(sequelize, DataTypes);
  var mdl_stats_user_weekly = _mdl_stats_user_weekly(sequelize, DataTypes);
  var mdl_stats_weekly = _mdl_stats_weekly(sequelize, DataTypes);
  var mdl_survey = _mdl_survey(sequelize, DataTypes);
  var mdl_survey_analysis = _mdl_survey_analysis(sequelize, DataTypes);
  var mdl_survey_answers = _mdl_survey_answers(sequelize, DataTypes);
  var mdl_survey_questions = _mdl_survey_questions(sequelize, DataTypes);
  var mdl_tag = _mdl_tag(sequelize, DataTypes);
  var mdl_tag_area = _mdl_tag_area(sequelize, DataTypes);
  var mdl_tag_coll = _mdl_tag_coll(sequelize, DataTypes);
  var mdl_tag_correlation = _mdl_tag_correlation(sequelize, DataTypes);
  var mdl_tag_instance = _mdl_tag_instance(sequelize, DataTypes);
  var mdl_task_adhoc = _mdl_task_adhoc(sequelize, DataTypes);
  var mdl_task_log = _mdl_task_log(sequelize, DataTypes);
  var mdl_task_scheduled = _mdl_task_scheduled(sequelize, DataTypes);
  var mdl_tool_cohortroles = _mdl_tool_cohortroles(sequelize, DataTypes);
  var mdl_tool_customlang = _mdl_tool_customlang(sequelize, DataTypes);
  var mdl_tool_customlang_components = _mdl_tool_customlang_components(sequelize, DataTypes);
  var mdl_tool_dataprivacy_category = _mdl_tool_dataprivacy_category(sequelize, DataTypes);
  var mdl_tool_dataprivacy_ctxexpired = _mdl_tool_dataprivacy_ctxexpired(sequelize, DataTypes);
  var mdl_tool_dataprivacy_ctxinstance = _mdl_tool_dataprivacy_ctxinstance(sequelize, DataTypes);
  var mdl_tool_dataprivacy_ctxlevel = _mdl_tool_dataprivacy_ctxlevel(sequelize, DataTypes);
  var mdl_tool_dataprivacy_purpose = _mdl_tool_dataprivacy_purpose(sequelize, DataTypes);
  var mdl_tool_dataprivacy_purposerole = _mdl_tool_dataprivacy_purposerole(sequelize, DataTypes);
  var mdl_tool_dataprivacy_request = _mdl_tool_dataprivacy_request(sequelize, DataTypes);
  var mdl_tool_monitor_events = _mdl_tool_monitor_events(sequelize, DataTypes);
  var mdl_tool_monitor_history = _mdl_tool_monitor_history(sequelize, DataTypes);
  var mdl_tool_monitor_rules = _mdl_tool_monitor_rules(sequelize, DataTypes);
  var mdl_tool_monitor_subscriptions = _mdl_tool_monitor_subscriptions(sequelize, DataTypes);
  var mdl_tool_policy = _mdl_tool_policy(sequelize, DataTypes);
  var mdl_tool_policy_acceptances = _mdl_tool_policy_acceptances(sequelize, DataTypes);
  var mdl_tool_policy_versions = _mdl_tool_policy_versions(sequelize, DataTypes);
  var mdl_tool_recyclebin_category = _mdl_tool_recyclebin_category(sequelize, DataTypes);
  var mdl_tool_recyclebin_course = _mdl_tool_recyclebin_course(sequelize, DataTypes);
  var mdl_tool_usertours_steps = _mdl_tool_usertours_steps(sequelize, DataTypes);
  var mdl_tool_usertours_tours = _mdl_tool_usertours_tours(sequelize, DataTypes);
  var mdl_upgrade_log = _mdl_upgrade_log(sequelize, DataTypes);
  var mdl_url = _mdl_url(sequelize, DataTypes);
  var mdl_user = _mdl_user(sequelize, DataTypes);
  var mdl_user_devices = _mdl_user_devices(sequelize, DataTypes);
  var mdl_user_enrolments = _mdl_user_enrolments(sequelize, DataTypes);
  var mdl_user_info_category = _mdl_user_info_category(sequelize, DataTypes);
  var mdl_user_info_data = _mdl_user_info_data(sequelize, DataTypes);
  var mdl_user_info_field = _mdl_user_info_field(sequelize, DataTypes);
  var mdl_user_lastaccess = _mdl_user_lastaccess(sequelize, DataTypes);
  var mdl_user_password_history = _mdl_user_password_history(sequelize, DataTypes);
  var mdl_user_password_resets = _mdl_user_password_resets(sequelize, DataTypes);
  var mdl_user_preferences = _mdl_user_preferences(sequelize, DataTypes);
  var mdl_user_private_key = _mdl_user_private_key(sequelize, DataTypes);
  var mdl_wiki = _mdl_wiki(sequelize, DataTypes);
  var mdl_wiki_links = _mdl_wiki_links(sequelize, DataTypes);
  var mdl_wiki_locks = _mdl_wiki_locks(sequelize, DataTypes);
  var mdl_wiki_pages = _mdl_wiki_pages(sequelize, DataTypes);
  var mdl_wiki_subwikis = _mdl_wiki_subwikis(sequelize, DataTypes);
  var mdl_wiki_synonyms = _mdl_wiki_synonyms(sequelize, DataTypes);
  var mdl_wiki_versions = _mdl_wiki_versions(sequelize, DataTypes);
  var mdl_workshop = _mdl_workshop(sequelize, DataTypes);
  var mdl_workshop_aggregations = _mdl_workshop_aggregations(sequelize, DataTypes);
  var mdl_workshop_assessments = _mdl_workshop_assessments(sequelize, DataTypes);
  var mdl_workshop_grades = _mdl_workshop_grades(sequelize, DataTypes);
  var mdl_workshop_submissions = _mdl_workshop_submissions(sequelize, DataTypes);
  var mdl_workshopallocation_scheduled = _mdl_workshopallocation_scheduled(sequelize, DataTypes);
  var mdl_workshopeval_best_settings = _mdl_workshopeval_best_settings(sequelize, DataTypes);
  var mdl_workshopform_accumulative = _mdl_workshopform_accumulative(sequelize, DataTypes);
  var mdl_workshopform_comments = _mdl_workshopform_comments(sequelize, DataTypes);
  var mdl_workshopform_numerrors = _mdl_workshopform_numerrors(sequelize, DataTypes);
  var mdl_workshopform_numerrors_map = _mdl_workshopform_numerrors_map(sequelize, DataTypes);
  var mdl_workshopform_rubric = _mdl_workshopform_rubric(sequelize, DataTypes);
  var mdl_workshopform_rubric_config = _mdl_workshopform_rubric_config(sequelize, DataTypes);
  var mdl_workshopform_rubric_levels = _mdl_workshopform_rubric_levels(sequelize, DataTypes);


  return {
    mdl_analytics_indicator_calc,
    mdl_analytics_models,
    mdl_analytics_models_log,
    mdl_analytics_predict_samples,
    mdl_analytics_prediction_actions,
    mdl_analytics_predictions,
    mdl_analytics_train_samples,
    mdl_analytics_used_analysables,
    mdl_analytics_used_files,
    mdl_assign,
    mdl_assign_grades,
    mdl_assign_overrides,
    mdl_assign_plugin_config,
    mdl_assign_submission,
    mdl_assign_user_flags,
    mdl_assign_user_mapping,
    mdl_assignfeedback_comments,
    mdl_assignfeedback_editpdf_annot,
    mdl_assignfeedback_editpdf_cmnt,
    mdl_assignfeedback_editpdf_queue,
    mdl_assignfeedback_editpdf_quick,
    mdl_assignfeedback_editpdf_rot,
    mdl_assignfeedback_file,
    mdl_assignment,
    mdl_assignment_submissions,
    mdl_assignment_upgrade,
    mdl_assignsubmission_file,
    mdl_assignsubmission_onlinetext,
    mdl_auth_oauth2_linked_login,
    mdl_backup_controllers,
    mdl_backup_courses,
    mdl_backup_logs,
    mdl_badge,
    mdl_badge_alignment,
    mdl_badge_backpack,
    mdl_badge_criteria,
    mdl_badge_criteria_met,
    mdl_badge_criteria_param,
    mdl_badge_endorsement,
    mdl_badge_external,
    mdl_badge_external_backpack,
    mdl_badge_external_identifier,
    mdl_badge_issued,
    mdl_badge_manual_award,
    mdl_badge_related,
    mdl_bigbluebuttonbn,
    mdl_bigbluebuttonbn_logs,
    mdl_block,
    mdl_block_instances,
    mdl_block_positions,
    mdl_block_recent_activity,
    mdl_block_recentlyaccesseditems,
    mdl_block_rss_client,
    mdl_block_xp,
    mdl_block_xp_config,
    mdl_block_xp_filters,
    mdl_block_xp_log,
    mdl_blog_association,
    mdl_blog_external,
    mdl_book,
    mdl_book_chapters,
    mdl_cache_filters,
    mdl_cache_flags,
    mdl_capabilities,
    mdl_chat,
    mdl_chat_messages,
    mdl_chat_messages_current,
    mdl_chat_users,
    mdl_choice,
    mdl_choice_answers,
    mdl_choice_options,
    mdl_cohort,
    mdl_cohort_members,
    mdl_comments,
    mdl_competency,
    mdl_competency_coursecomp,
    mdl_competency_coursecompsetting,
    mdl_competency_evidence,
    mdl_competency_framework,
    mdl_competency_modulecomp,
    mdl_competency_plan,
    mdl_competency_plancomp,
    mdl_competency_relatedcomp,
    mdl_competency_template,
    mdl_competency_templatecohort,
    mdl_competency_templatecomp,
    mdl_competency_usercomp,
    mdl_competency_usercompcourse,
    mdl_competency_usercompplan,
    mdl_competency_userevidence,
    mdl_competency_userevidencecomp,
    mdl_config,
    mdl_config_log,
    mdl_config_plugins,
    mdl_context,
    mdl_context_temp,
    mdl_course,
    mdl_course_categories,
    mdl_course_completion_aggr_methd,
    mdl_course_completion_crit_compl,
    mdl_course_completion_criteria,
    mdl_course_completion_defaults,
    mdl_course_completions,
    mdl_course_format_options,
    mdl_course_modules,
    mdl_course_modules_completion,
    mdl_course_published,
    mdl_course_request,
    mdl_course_sections,
    mdl_customfield_category,
    mdl_customfield_data,
    mdl_customfield_field,
    mdl_data,
    mdl_data_content,
    mdl_data_fields,
    mdl_data_records,
    mdl_editor_atto_autosave,
    mdl_enrol,
    mdl_enrol_flatfile,
    mdl_enrol_lti_lti2_consumer,
    mdl_enrol_lti_lti2_context,
    mdl_enrol_lti_lti2_nonce,
    mdl_enrol_lti_lti2_resource_link,
    mdl_enrol_lti_lti2_share_key,
    mdl_enrol_lti_lti2_tool_proxy,
    mdl_enrol_lti_lti2_user_result,
    mdl_enrol_lti_tool_consumer_map,
    mdl_enrol_lti_tools,
    mdl_enrol_lti_users,
    mdl_enrol_paypal,
    mdl_event,
    mdl_event_subscriptions,
    mdl_events_handlers,
    mdl_events_queue,
    mdl_events_queue_handlers,
    mdl_external_functions,
    mdl_external_services,
    mdl_external_services_functions,
    mdl_external_services_users,
    mdl_external_tokens,
    mdl_favourite,
    mdl_feedback,
    mdl_feedback_completed,
    mdl_feedback_completedtmp,
    mdl_feedback_item,
    mdl_feedback_sitecourse_map,
    mdl_feedback_template,
    mdl_feedback_value,
    mdl_feedback_valuetmp,
    mdl_file_conversion,
    mdl_files,
    mdl_files_reference,
    mdl_filter_active,
    mdl_filter_config,
    mdl_folder,
    mdl_forum,
    mdl_forum_digests,
    mdl_forum_discussion_subs,
    mdl_forum_discussions,
    mdl_forum_grades,
    mdl_forum_posts,
    mdl_forum_queue,
    mdl_forum_read,
    mdl_forum_subscriptions,
    mdl_forum_track_prefs,
    mdl_game,
    mdl_game_attempts,
    mdl_game_bookquiz,
    mdl_game_bookquiz_chapters,
    mdl_game_bookquiz_questions,
    mdl_game_cross,
    mdl_game_cryptex,
    mdl_game_export_html,
    mdl_game_export_javame,
    mdl_game_grades,
    mdl_game_hangman,
    mdl_game_hiddenpicture,
    mdl_game_millionaire,
    mdl_game_queries,
    mdl_game_repetitions,
    mdl_game_snakes,
    mdl_game_snakes_database,
    mdl_game_sudoku,
    mdl_game_sudoku_database,
    mdl_glossary,
    mdl_glossary_alias,
    mdl_glossary_categories,
    mdl_glossary_entries,
    mdl_glossary_entries_categories,
    mdl_glossary_formats,
    mdl_grade_categories,
    mdl_grade_categories_history,
    mdl_grade_grades,
    mdl_grade_grades_history,
    mdl_grade_import_newitem,
    mdl_grade_import_values,
    mdl_grade_items,
    mdl_grade_items_history,
    mdl_grade_letters,
    mdl_grade_outcomes,
    mdl_grade_outcomes_courses,
    mdl_grade_outcomes_history,
    mdl_grade_settings,
    mdl_grading_areas,
    mdl_grading_definitions,
    mdl_grading_instances,
    mdl_gradingform_guide_comments,
    mdl_gradingform_guide_criteria,
    mdl_gradingform_guide_fillings,
    mdl_gradingform_rubric_criteria,
    mdl_gradingform_rubric_fillings,
    mdl_gradingform_rubric_levels,
    mdl_groupings,
    mdl_groupings_groups,
    mdl_groups,
    mdl_groups_members,
    mdl_h5p,
    mdl_h5p_contents_libraries,
    mdl_h5p_libraries,
    mdl_h5p_libraries_cachedassets,
    mdl_h5p_library_dependencies,
    mdl_hvp,
    mdl_hvp_auth,
    mdl_hvp_content_hub_cache,
    mdl_hvp_content_user_data,
    mdl_hvp_contents_libraries,
    mdl_hvp_counters,
    mdl_hvp_events,
    mdl_hvp_libraries,
    mdl_hvp_libraries_cachedassets,
    mdl_hvp_libraries_hub_cache,
    mdl_hvp_libraries_languages,
    mdl_hvp_libraries_libraries,
    mdl_hvp_tmpfiles,
    mdl_hvp_xapi_results,
    mdl_imscp,
    mdl_label,
    mdl_lesson,
    mdl_lesson_answers,
    mdl_lesson_attempts,
    mdl_lesson_branch,
    mdl_lesson_grades,
    mdl_lesson_overrides,
    mdl_lesson_pages,
    mdl_lesson_timer,
    mdl_license,
    mdl_lock_db,
    mdl_log,
    mdl_log_display,
    mdl_log_queries,
    mdl_logstore_standard_log,
    mdl_lti,
    mdl_lti_access_tokens,
    mdl_lti_submission,
    mdl_lti_tool_proxies,
    mdl_lti_tool_settings,
    mdl_lti_types,
    mdl_lti_types_config,
    mdl_ltiservice_gradebookservices,
    mdl_message,
    mdl_message_airnotifier_devices,
    mdl_message_contact_requests,
    mdl_message_contacts,
    mdl_message_conversation_actions,
    mdl_message_conversation_members,
    mdl_message_conversations,
    mdl_message_email_messages,
    mdl_message_popup,
    mdl_message_popup_notifications,
    mdl_message_processors,
    mdl_message_providers,
    mdl_message_read,
    mdl_message_user_actions,
    mdl_message_users_blocked,
    mdl_messageinbound_datakeys,
    mdl_messageinbound_handlers,
    mdl_messageinbound_messagelist,
    mdl_messages,
    mdl_mnet_application,
    mdl_mnet_host,
    mdl_mnet_host2service,
    mdl_mnet_log,
    mdl_mnet_remote_rpc,
    mdl_mnet_remote_service2rpc,
    mdl_mnet_rpc,
    mdl_mnet_service,
    mdl_mnet_service2rpc,
    mdl_mnet_session,
    mdl_mnet_sso_access_control,
    mdl_mnetservice_enrol_courses,
    mdl_mnetservice_enrol_enrolments,
    mdl_modules,
    mdl_my_pages,
    mdl_notifications,
    mdl_oauth2_access_token,
    mdl_oauth2_endpoint,
    mdl_oauth2_issuer,
    mdl_oauth2_system_account,
    mdl_oauth2_user_field_mapping,
    mdl_page,
    mdl_portfolio_instance,
    mdl_portfolio_instance_config,
    mdl_portfolio_instance_user,
    mdl_portfolio_log,
    mdl_portfolio_mahara_queue,
    mdl_portfolio_tempdata,
    mdl_post,
    mdl_profiling,
    mdl_qtype_ddimageortext,
    mdl_qtype_ddimageortext_drags,
    mdl_qtype_ddimageortext_drops,
    mdl_qtype_ddmarker,
    mdl_qtype_ddmarker_drags,
    mdl_qtype_ddmarker_drops,
    mdl_qtype_essay_options,
    mdl_qtype_match_options,
    mdl_qtype_match_subquestions,
    mdl_qtype_multichoice_options,
    mdl_qtype_randomsamatch_options,
    mdl_qtype_shortanswer_options,
    mdl_question,
    mdl_question_answers,
    mdl_question_attempt_step_data,
    mdl_question_attempt_steps,
    mdl_question_attempts,
    mdl_question_calculated,
    mdl_question_calculated_options,
    mdl_question_categories,
    mdl_question_dataset_definitions,
    mdl_question_dataset_items,
    mdl_question_datasets,
    mdl_question_ddwtos,
    mdl_question_gapselect,
    mdl_question_hints,
    mdl_question_multianswer,
    mdl_question_numerical,
    mdl_question_numerical_options,
    mdl_question_numerical_units,
    mdl_question_response_analysis,
    mdl_question_response_count,
    mdl_question_statistics,
    mdl_question_truefalse,
    mdl_question_usages,
    mdl_quiz,
    mdl_quiz_attempts,
    mdl_quiz_feedback,
    mdl_quiz_grades,
    mdl_quiz_overrides,
    mdl_quiz_overview_regrades,
    mdl_quiz_reports,
    mdl_quiz_sections,
    mdl_quiz_slot_tags,
    mdl_quiz_slots,
    mdl_quiz_statistics,
    mdl_quizaccess_seb_quizsettings,
    mdl_quizaccess_seb_template,
    mdl_rating,
    mdl_registration_hubs,
    mdl_repository,
    mdl_repository_instance_config,
    mdl_repository_instances,
    mdl_repository_onedrive_access,
    mdl_resource,
    mdl_resource_old,
    mdl_role,
    mdl_role_allow_assign,
    mdl_role_allow_override,
    mdl_role_allow_switch,
    mdl_role_allow_view,
    mdl_role_assignments,
    mdl_role_capabilities,
    mdl_role_context_levels,
    mdl_role_names,
    mdl_scale,
    mdl_scale_history,
    mdl_scorm,
    mdl_scorm_aicc_session,
    mdl_scorm_scoes,
    mdl_scorm_scoes_data,
    mdl_scorm_scoes_track,
    mdl_scorm_seq_mapinfo,
    mdl_scorm_seq_objective,
    mdl_scorm_seq_rolluprule,
    mdl_scorm_seq_rolluprulecond,
    mdl_scorm_seq_rulecond,
    mdl_scorm_seq_ruleconds,
    mdl_search_index_requests,
    mdl_search_simpledb_index,
    mdl_sessions,
    mdl_stats_daily,
    mdl_stats_monthly,
    mdl_stats_user_daily,
    mdl_stats_user_monthly,
    mdl_stats_user_weekly,
    mdl_stats_weekly,
    mdl_survey,
    mdl_survey_analysis,
    mdl_survey_answers,
    mdl_survey_questions,
    mdl_tag,
    mdl_tag_area,
    mdl_tag_coll,
    mdl_tag_correlation,
    mdl_tag_instance,
    mdl_task_adhoc,
    mdl_task_log,
    mdl_task_scheduled,
    mdl_tool_cohortroles,
    mdl_tool_customlang,
    mdl_tool_customlang_components,
    mdl_tool_dataprivacy_category,
    mdl_tool_dataprivacy_ctxexpired,
    mdl_tool_dataprivacy_ctxinstance,
    mdl_tool_dataprivacy_ctxlevel,
    mdl_tool_dataprivacy_purpose,
    mdl_tool_dataprivacy_purposerole,
    mdl_tool_dataprivacy_request,
    mdl_tool_monitor_events,
    mdl_tool_monitor_history,
    mdl_tool_monitor_rules,
    mdl_tool_monitor_subscriptions,
    mdl_tool_policy,
    mdl_tool_policy_acceptances,
    mdl_tool_policy_versions,
    mdl_tool_recyclebin_category,
    mdl_tool_recyclebin_course,
    mdl_tool_usertours_steps,
    mdl_tool_usertours_tours,
    mdl_upgrade_log,
    mdl_url,
    mdl_user,
    mdl_user_devices,
    mdl_user_enrolments,
    mdl_user_info_category,
    mdl_user_info_data,
    mdl_user_info_field,
    mdl_user_lastaccess,
    mdl_user_password_history,
    mdl_user_password_resets,
    mdl_user_preferences,
    mdl_user_private_key,
    mdl_wiki,
    mdl_wiki_links,
    mdl_wiki_locks,
    mdl_wiki_pages,
    mdl_wiki_subwikis,
    mdl_wiki_synonyms,
    mdl_wiki_versions,
    mdl_workshop,
    mdl_workshop_aggregations,
    mdl_workshop_assessments,
    mdl_workshop_grades,
    mdl_workshop_submissions,
    mdl_workshopallocation_scheduled,
    mdl_workshopeval_best_settings,
    mdl_workshopform_accumulative,
    mdl_workshopform_comments,
    mdl_workshopform_numerrors,
    mdl_workshopform_numerrors_map,
    mdl_workshopform_rubric,
    mdl_workshopform_rubric_config,
    mdl_workshopform_rubric_levels,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
