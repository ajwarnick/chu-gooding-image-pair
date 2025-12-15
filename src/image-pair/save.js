import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( {attributes} ) {
	const distributionClass= `project__imagePair__distribution-${attributes.distribution}`
	return (
		<div { ...useBlockProps.save({
			className: distributionClass
		})}>
			<InnerBlocks.Content />
		</div>
	);
}
