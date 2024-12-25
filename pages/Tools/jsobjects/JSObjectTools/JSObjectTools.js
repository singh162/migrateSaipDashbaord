export default {
	convertToJsonArray(json) {
		let titleCaseKeys = !CheckboxRaw.isChecked;
		var results = [];
		for (let i = 0; i< Object.keys(json).length; i++) {
			let key = Object.keys(json)[i];
			let newKey = key;
			if (titleCaseKeys) {
				newKey = key.replace(/(?:^\w|[A-Z]|\b\w|\s+\w|_+\w)/g, (txt) => {
					return txt.toUpperCase().replace(/_/g, ' ');
				});
			}
			results.push({"Field" : newKey, "Value": json[key]});
		}
		return results;
	},
	data_dump() {
		return JSObjectTools.convertToJsonArray(JSObjectTools.prepare_domain_info()["website"]).concat(JSObjectTools.convertToJsonArray(JSObjectTools.prepare_domain_info()["profiler"]));
	},
	data_dump_tsv() {
		return this.data_dump().map(el => {
			// Check if el.Value exists, is a string, and starts with '+' or '='
			let formattedValue = el.Value && typeof el.Value === 'string' && (el.Value.startsWith('+') || el.Value.startsWith('=')) 
			? `'${el.Value}` 
			: el.Value;
			return `${el.Field}\t${formattedValue}`;
		}).join("\n");
	},


	prepare_domain_info () {
		let data = [];
		data[0] = Meta.data;
		data[1] = Profiler.data;
		data[2] = DNS.data;
		data[3] = Traffic.data;

		var final_data = {
			"website": {
				"entry_id": InputEntryId.text,
				"website_domain": "",
				"website_logo": "",
				"website_link": "",
				"store_name": "",
				"case_category": "",
				"associated_listing_name": "",
				"associated_listing_profile_link": "",
				"incident_date": "",
				"updated_at": "",
				"top_level_domain": "",
				"subdomain": "",
				"root_domain": "",
				"website_classification": "",
				"website_sub_classification": "",
				"violation_classification": "",
				"violating_content_classification": "",
				"violating_content_sub_classification": "",
				"violation_severity": "",
				"global_violating_entities": "",
				"local_violating_entities": "",
				"site_accessible_local": "",
				"site_accessible_proxy_vpn": "",
				"screenshots_recordings": "",
				"proxy_alias_site": "",
				"primary_domain": "",
				"legal_report": "",
				"reported_date": "",
				"approved_date": "",
				"resolved_date": "",
				"enforcement_outcome": "",
				"enforcement_outcome_description": "",
				"case_notes": "",
				"server_ip_v4": "",
				"server_location_v4": "",
				"reverse_dns_v4": "",
				"asn_number_v4": "",
				"asn_name_v4": "",
				"asn_registration_date_v4": "",
				"asn_org_id_v4": "",
				"asn_address_v4": "",
				"asn_city_v4": "",
				"asn_state_prov_v4": "",
				"asn_postal_code_v4": "",
				"asn_country_v4": "",
				"reverse_ip_total_domains_v4": "",
				"asn_org_tech_handle_v4": "",
				"asn_org_tech_name_v4": "",
				"asn_org_tech_phone_v4": "",
				"asn_org_tech_email_v4": "",
				"asn_org_tech_ref_v4": "",
				"asn_org_abuse_handle_v4": "",
				"asn_org_abuse_name_v4": "",
				"asn_org_abuse_phone_v4": "",
				"asn_org_abuse_email_v4": "",
				"asn_org_abuse_ref_v4": "",
				"public_reporting_email_v4": "",
				"public_reporting_phone_v4": "",
				"public_reporting_form_v4": "",
				"hidden_isp_v4": "",
				"hidden_isp_contact_v4": "",
				"server_ip_v6": "",
				"server_location_v6": "",
				"reverse_dns_v6": "",
				"asn_number_v6": "",
				"asn_name_v6": "",
				"asn_registration_date_v6": "",
				"asn_org_id_v6": "",
				"asn_address_v6": "",
				"asn_city_v6": "",
				"asn_state_prov_v6": "",
				"asn_postal_code_v6": "",
				"asn_country_v6": "",
				"reverse_ip_total_domains_v6": "",
				"asn_org_tech_handle_v6": "",
				"asn_org_tech_name_v6": "",
				"asn_org_tech_phone_v6": "",
				"asn_org_tech_email_v6": "",
				"asn_org_tech_ref_v6": "",
				"asn_org_abuse_handle_v6": "",
				"asn_org_abuse_name_v6": "",
				"asn_org_abuse_phone_v6": "",
				"asn_org_abuse_email_v6": "",
				"asn_org_abuse_ref_v6": "",
				"public_reporting_email_v6": "",
				"public_reporting_phone_v6": "",
				"public_reporting_form_v6": "",
				"hidden_isp_v6": "",
				"hidden_isp_contact_v6": "",
				"registry_domain_id": "",
				"registrar_whois_server": "",
				"registrar_url": "",
				"domain_updated_date": "",
				"domain_creation_date": "",
				"registrar_name": "",
				"registrar_iana_id": "",
				"registrar_abuse_contact_email": "",
				"registrar_abuse_contact_phone": "",
				"registry_registrant_id": "",
				"registrant_name": "",
				"registrant_organization": "",
				"registrant_street": "",
				"registrant_city": "",
				"registrant_state_province": "",
				"registrant_postal_code": "",
				"registrant_country": "",
				"registrant_phone": "",
				"registrant_phone_ext": "",
				"registrant_fax": "",
				"registrant_fax_ext": "",
				"registrant_email": "",
				"registry_admin_id": "",
				"primary_name_server": "",
				"primary_mx_server": "",
				"primary_a_record": "",
				"primary_aaaa_record": "",
				"historical_whois_report": "",
				"historical_website_structure": "",
				"organic_search_traffic": "",
				"paid_search_traffic": "",
				"backlinks": "",
				"top_organic_country_visitor": "",
				"top_organic_country_visitor_percent": "",
				"local_organic_visitor": "",
				"local_organic_visitor_percent": "",
				"top_paid_country_visitor": "",
				"top_paid_country_visitor_percent": "",
				"local_paid_visitor": "",
				"local_paid_visitor_percent": "",
				"top_organic_keywords": "",
				"top_paid_keywords": "",
				"keywords_by_intent": "",
				"main_organic_competitors": "",
				"main_organic_competitors_count": "",
				"top_anchors": "",
				"top_outbound_domain": "",
				"unique_visitors": "",
				"pages_per_visit": "",
				"avg_visit_duration": "",
				"bounce_rate": "",
				"market_share": "",
				"market_traffic": "",
				"direct_traffic_sources": "",
				"referral_traffic_sources": "",
				"organic_search_traffic_sources": "",
				"paid_search_traffic_sources": "",
				"organic_social_traffic_sources": "",
				"paid_social_traffic_sources": "",
				"email_traffic_sources": "",
				"display_ads_traffic_sources": "",
				"website_ranking": "",
				"website_country_ranking": "",
				"website_operating_category": "",
				"website_ranking_category": "",
				"website_country_ranking_category": "",
				"reverse_email_search_evidences": "",
				"reverse_phone_search_evidences": "",
				"reverse_search_keyword": "",
				"reverse_search_keyword_evidences": "",
				"primary_ad_network": "",
				"primary_ad_network_client_id": "",
				"primary_ad_network_screenshot": "",
				"primary_payment_method": "",
				"primary_payment_method_id": "",
				"primary_payment_method_id_definition": "",
				"primary_payment_method_screenshot": "",
				"reverse_payment_method_id_evidences": "",
				"crypto_wallets": "",
				"crypto_wallets_hash": "",
				"crypto_wallets_page_screenshot": "",
				"reverse_crypto_wallets_hash_evidences": "",
				"banking_details": "",
				"reverse_banking_details_evidences": "",
				"transaction_evidences": "",
				"identified_user_name": "",
				"identified_user_email": "",
				"identified_user_phone": "",
				"identified_user_other_contact": "",
				"identified_user_investigation_data": "",
			},
			"profiler": {
				"entry_id": InputEntryId.text,
				"website_domain": "",
				"miscellaneous_unclassified": "",
				"widgets": "",
				"analytics": "",
				"comment_systems": "",
				"security": "",
				"font_scripts": "",
				"cdn": "",
				"marketing_automation": "",
				"advertising": "",
				"webcams": "",
				"tag_managers": "",
				"live_chat": "",
				"javascript_libraries": "",
				"cookie_compliance": "",
				"accessibility": "",
				"ssl_tls_certificate_authorities": "",
				"affiliate_programs": "",
				"appointment_scheduling": "",
				"surveys": "",
				"ab_testing": "",
				"email": "",
				"personalisation": "",
				"retargeting": "",
				"rum": "",
				"geolocation": "",
				"browser_fingerprinting": "",
				"loyalty_rewards": "",
				"feature_management": "",
				"segmentation": "",
				"hosting": "",
				"translation": "",
				"reviews": "",
				"buy_now_pay_later": "",
				"performance": "",
				"reservations_delivery": "",
				"referral_marketing": "",
				"digital_asset_management": "",
				"content_curation": "",
				"customer_data_platform": "",
				"cart_abandonment": "",
				"shipping_carriers": "",
				"recruitment_staffing": "",
				"returns": "",
				"livestreaming": "",
				"ticket_booking": "",
				"augmented_reality": "",
				"domain_parking": "",
				"fundraising_donations": "",
				"javascript_frameworks": "",
				"web_servers": "",
				"mobile_frameworks": "",
				"payment_processors": "",
				"seo": "",
				"user_onboarding": "",
				"containers": "",
				"paas": "",
				"iaas": "",
				"wordpress_plugins": "",
				"shopify_apps": "",
				"form_builders": "",
				"video_players": "",
				"web_frameworks": "",
				"caching": "",
				"web_server_extensions": "",
				"reverse_proxies": "",
				"load_balancers": "",
				"ui_frameworks": "",
				"wordpress_themes": "",
				"shopify_themes": "",
				"drupal_themes": "",
				"javascript_graphics": "",
				"operating_systems": "",
				"maps": "",
				"authentication": "",
				"cross_border_ecommerce": "",
				"fulfilment": "",
				"ecommerce_frontends": "",
				"rich_text_editors": "",
				"programming_languages": "",
				"databases_service": "",
				"crm": "",
				"cryptominers": "",
				"editor": "",
				"search_engines": "",
				"ci": "",
				"database_managers": "",
				"documentation_tools": "",
				"hosting_panels": "",
				"issue_trackers": "",
				"webmail": "",
				"network_services": "",
				"development": "",
				"network_storage": "",
				"cms": "",
				"message_boards": "",
				"ecommerce": "",
				"photo_galleries": "",
				"wikis": "",
				"blogs": "",
				"lms": "",
				"media_servers": "",
				"remote_access": "",
				"feed_readers": "",
				"dms": "",
				"page_builder": "",
				"accounting": "",
				"static_site_generators": "",
				"phone_number": "",
				"skype": "",
				"whatsapp": "",
				"email_address": "",
				"email_address_verified": "",
				"email_address_safe": "",
				"twitter": "",
				"facebook": "",
				"instagram": "",
				"github": "",
				"tiktok": "",
				"youtube": "",
				"pinterest": "",
				"linkedin": "",
				"owler": "",
				"title": "",
				"description": "",
				"copyright": "",
				"copyright_year": "",
				"responsive": "",
				"schema_org_types": "",
				"cert_organisation": "",
				"cert_country": "",
				"cert_state": "",
				"cert_locality": "",
				"cert_issuer": "",
				"cert_protocol": "",
				"cert_expiry": "",
				"spf_record": "",
				"dmarc_record": "",
				"ssl_tls_enabled": "",
				"google_analytics": "",
				"google_adsense": "",
				"medianet": "",
				"facebook_services": "",
				"optimizely": "",
				"company_name": "",
				"inferred_company_name": "",
				"industry": "",
				"about": "",
				"locations": "",
				"company_size": "",
				"company_type": "",
				"company_founded": "",
				"people": "",
			}
		}

		let final_keys = Object.keys(final_data);
		for (let j = 0; j < final_keys.length; j++) {
			let obj = final_keys[j];
			for (let i = 0; i < Object.keys(final_data[obj]).length; i++) {
				let key = Object.keys(final_data[obj])[i];
				for(let k =0; k<data.length; k++){
					if (data[k][key] && data[k][key] != "") {
						final_data[obj][key] = data[k][key];
					}
				}
			}
		}
		return final_data;
	}
}